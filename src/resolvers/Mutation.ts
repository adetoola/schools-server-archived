import { stringArg, mutationType } from "nexus";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { promisify } from "util";
import { randomBytes } from "crypto";
import sendEmail from "../services/email";
import { isTokenValid } from "../utils";

export const Mutation = mutationType({
  definition(t) {
    t.field("signup", {
      type: "Account",
      args: {
        username: stringArg({ nullable: true }),
        email: stringArg(),
        password: stringArg(),
      },
      resolve: async (parent, { username, email, password }, ctx) => {
        const hashedPassword = await hash(password, 10);
        email = email.toLowerCase();
        const account = await ctx.prisma.createAccount({
          username: username ? username : null,
          email,
          password: hashedPassword,
        });

        // Generate verification token
        const token = (await promisify(randomBytes)(20)).toString("hex");
        await ctx.prisma.createVerification({
          accountId: account.id,
          token,
        });

        // Embed in mail and send email
        const link = `${process.env.FRONTEND_URL}/verify-email/${token}/`;
        sendEmail(email, "Verify your email address", link).catch(console.log);
        return account;
      },
    });

    t.field("login", {
      type: "Account",
      args: {
        email: stringArg(),
        password: stringArg(),
      },
      resolve: async (parent, { email, password }, ctx) => {
        const account = await ctx.prisma.account({ email });
        if (!account) throw new Error(`No account found for email: ${email}`);

        const passwordValid = await compare(password, account.password);

        if (!passwordValid) throw new Error("Invalid password");
        if (!account.isVerified) throw new Error("Please verify your account");

        const token = sign({ accountId: account.id }, process.env.APP_SECRET);

        // set jwt as cookie on response
        ctx.response.cookie("token", token, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24 * 180, // 6 months
        });

        return account;
      },
    });

    t.field("signout", {
      type: "Account",
      nullable: true,
      resolve: (parent, args, ctx) => {
        ctx.response.clearCookie("token");
        return { message: "User Successfully logged out!" };
      },
    });

    t.field("verify", {
      type: "Verification",
      args: {
        token: stringArg(),
      },
      resolve: async (parent, { token }, ctx) => {
        const verification = await ctx.prisma.verification({ token });

        // Errors Invalid or Expired
        if (!verification) throw new Error("Token is invalid");
        if (!isTokenValid(verification.createdAt, parseInt(process.env.VERIFICATION_TOKEN_DURATION, 10)))
          throw new Error("Token has expired");

        // else updated user to verified
        const { email } = await ctx.prisma.updateAccount({
          data: { isVerified: true },
          where: { id: verification.accountId },
        });

        // Send welcome mail here
        const link = `${process.env.FRONTEND_URL}/login/`;
        sendEmail(email, "Welcome!!! Your account is verified", link).catch(console.log);

        return verification;
      },
    });
  },
});
