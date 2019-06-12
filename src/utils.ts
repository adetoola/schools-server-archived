import { verify } from "jsonwebtoken";
import { Context } from "./types";
import * as moment from "moment";

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

/** This function checks if a token has expired by reading the tokenTime
 And generating a cutOffTime, as calculated as, Date.now() - Expiration Period
 Then, tokenTime - cutOff > 0 means there is some time left so token is valid
 **/
export function isTokenValid(
  tokenTime: moment.MomentInput,
  amount: moment.DurationInputArg1,
  unit: moment.unitOfTime.DurationConstructor = "hours"
): boolean {
  const time = moment(tokenTime);
  const cutOffTime = moment().subtract(amount, unit);
  return time.diff(cutOffTime) > 0;
}
