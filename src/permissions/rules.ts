import { rule } from 'graphql-shield';

import { Context } from '../types';
import { getAccountId } from '../utils';

export const isAuthenticatedUser = rule()(
  async (_parent, _args, ctx: Context): Promise<boolean> => {
    const accountId = await getAccountId(ctx);
    return Boolean(accountId);
  }
);
