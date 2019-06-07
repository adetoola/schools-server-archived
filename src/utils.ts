import { verify } from "jsonwebtoken";
import { Context } from "./types";

interface Token {
  accountId: string;
}

export function getAccountId(ctx: Context) {
  const { token } = ctx.request.cookies;
  if (token) {
    const verifiedToken = verify(token, process.env.APP_SECRET) as Token;
    return verifiedToken && verifiedToken.accountId;
  }
}
