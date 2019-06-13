import { hash, compare } from "bcrypt";
import { randomBytes } from "crypto";
import { sign } from "jsonwebtoken";
import { stringArg, mutationType } from "nexus";
import { promisify } from "util";
import * as parse from "date-fns/parse";

import sendEmail from "../../services/email";
import { cutOffTime } from "../../utils";

export const Mutation = mutationType({
  definition(t): void {
    t.field("signup", {
      type: "Account",
      args: {
        username: stringArg({ nullable: true }),
        email: stringArg(),
        password: stringArg(),
      },
      resolve: async (parent, { username, email, password }, ctx) => {
        const hashedPassword = await hash(password, 10);
        const parsedEmail = email.toLowerCase().trim();

        const isEmailAlreadyRegistered = await ctx.prisma.account({ email });

        if (isEmailAlreadyRegistered) throw new Error(`Email already in use.`);

        const account = await ctx.prisma.createAccount({
          username: username ? username : null,
          email: parsedEmail,
          password: hashedPassword,
        });

        // Generate verification token
        const token = (await promisify(randomBytes)(20)).toString("hex");
        await ctx.prisma.createToken({
          accountId: account.id,
          token,
          type: "EMAIL",
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

        // update lastLogin
        return ctx.prisma.updateAccount({
          where: {
            id: account.id,
          },
          data: {
            lastLogin: parse(Date.now()).toISOString(),
          },
        });
      },
    });

    t.field("signout", {
      type: "TriggerAction",
      nullable: true,
      resolve: (parent, args, ctx) => {
        ctx.response.clearCookie("token");
        return { ok: true };
      },
    });

    t.field("verify", {
      type: "TriggerAction",
      args: {
        token: stringArg(),
      },
      resolve: async (parent, { token }, ctx) => {
        const timeLimit = parseInt(process.env.VERIFICATION_TOKEN_DURATION, 10);
        const [verficationToken] = await ctx.prisma.tokens({
          where: {
            token,
            createdAt_gte: cutOffTime(timeLimit),
          },
          first: 1,
        });

        // Token Invalid or Expired
        if (!verficationToken) throw new Error("Verification token has expired or does not exist.");

        // else updated user to verified
        const { email } = await ctx.prisma.updateAccount({
          data: { isVerified: true },
          where: { id: verficationToken.accountId },
        });

        // Send welcome mail here
        const link = `${process.env.FRONTEND_URL}/login/`;
        sendEmail(email, "Welcome! Your account is verified", link).catch(console.log);

        return { ok: true };
      },
    });

    t.field("requestVerificationMail", {
      type: "TriggerAction",
      args: {
        email: stringArg(),
      },
      resolve: async (parent, { email }, ctx) => {
        const account = await ctx.prisma.account({ email: email.toLowerCase().trim() });
        if (!account) throw new Error("Account does not exist");
        if (account.isVerified) throw new Error("Account is already verified");

        // check if any verification mail had been sent in the last x(e.g. 15mins),
        const tokens = await ctx.prisma.tokens({
          where: {
            accountId: account.id,
            createdAt_gte: cutOffTime(parseInt(process.env.EMAIL_LOCKOUT_DURATION, 10)),
            type: "EMAIL",
          },
        });

        if (tokens.length > 0)
          throw new Error(
            `Mail was already sent! Wait at least ${process.env.EMAIL_LOCKOUT_DURATION} minutes before trying again`
          );

        // Generate verification token
        const token = (await promisify(randomBytes)(20)).toString("hex");
        await ctx.prisma.createToken({
          accountId: account.id,
          token,
          type: "EMAIL",
        });

        // create and send verification mail
        const link = `${process.env.FRONTEND_URL}/verify-email/${token}/`;
        sendEmail(email, "Verify your email address", link).catch(console.log);

        return { ok: true };
      },
    });

    t.field("requestPasswordReset", {
      type: "TriggerAction",
      args: {
        email: stringArg(),
      },
      resolve: async (parent, { email }, ctx) => {
        const timeLimit = parseInt(process.env.EMAIL_LOCKOUT_DURATION, 10);
        const account = await ctx.prisma.account({ email: email.toLowerCase().trim() });
        if (!account) throw new Error("Account does not exist");

        // check if any verification mail had been sent in the last x(e.g. 15mins),
        const tokens = await ctx.prisma.tokens({
          where: {
            accountId: account.id,
            type: "PASSWORD",
            createdAt_gte: cutOffTime(timeLimit),
          },
        });

        if (tokens.length > 0)
          throw new Error(`Mail was already sent! Wait at least ${timeLimit} minutes before trying again`);

        // Generate verification token
        const token = (await promisify(randomBytes)(20)).toString("hex");
        await ctx.prisma.createToken({
          accountId: account.id,
          token,
          type: "PASSWORD",
        });

        // create and send verification mail
        const link = `${process.env.FRONTEND_URL}/password-reset/${token}/`;
        sendEmail(email, "Your password reset token", link).catch(console.log);

        return { ok: true };
      },
    });

    t.field("passwordReset", {
      type: "TriggerAction",
      args: {
        token: stringArg(),
        password: stringArg(),
      },
      resolve: async (parent, { token, password }, ctx) => {
        const timeLimit = parseInt(process.env.EMAIL_LOCKOUT_DURATION, 10);
        // Check if token is valid
        const [resetToken] = await ctx.prisma.tokens({
          where: {
            token,
            createdAt_gte: cutOffTime(timeLimit),
          },
          first: 1,
        });

        if (!resetToken) throw new Error("Reset token has expired or does not exist.");

        // retrieve account, hash new password and update account
        const hashedPassword = await hash(password, 10);
        await ctx.prisma.updateAccount({
          where: {
            id: resetToken.accountId,
          },
          data: {
            password: hashedPassword,
          },
        });

        // Prevent replay attack (delete token)
        await ctx.prisma.deleteToken({ token });

        return { ok: true };
      },
    });
  },
});
