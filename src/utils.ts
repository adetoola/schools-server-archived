import * as subHours from 'date-fns/sub_hours';
import { verify } from 'jsonwebtoken';

import * as Joi from '@hapi/joi';

import { Context } from './types';

interface Token {
  accountId: string;
}

/**
 * Picks the authenticated account id from the cookie passed
 *
 * @param ctx
 * @returns string
 */
export function getAccountId(ctx: Context): string {
  const { token } = ctx.request.cookies;
  if (token) {
    const verifiedToken = verify(token, process.env.APP_SECRET) as Token;
    return verifiedToken && verifiedToken.accountId;
  }
}

/**
 * Takes a number - duration, in hours, and substracts it from Date.now().
 *
 * @param duration
 * @returns Date
 */
export function cutOffTime(duration: number): Date {
  const result = subHours(Date.now(), duration);
  return result;
}

export default function formatJoiErrors(error: Joi.ValidationError): string {
  return error.details
    .map(d => {
      return d.message;
    })
    .join(' ');
}
