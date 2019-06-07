import { stringArg, mutationType } from "nexus";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { promisify } from "util";
import { randomBytes } from "crypto";
import sendEmail from "../services/email";
import { signedCookie } from "cookie-parser";

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
        const link = `${process.env.FRONTEND_URL}/confirm_email?t=${token}/`;
        console.log("link", link);
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
        if (!account) {
          throw new Error(`No account found for email: ${email}`);
        }
        const passwordValid = await compare(password, account.password);
        if (!passwordValid) {
          throw new Error("Invalid password");
        }

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
  },
});
