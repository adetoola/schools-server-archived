import { rule } from 'graphql-shield';

import { Context } from '../../types';
import { getAccountId } from '../../utils';

export const canCreateInvitation = rule()(
  async (_parent, _args, ctx: Context): Promise<boolean> => {
    const accountId = await getAccountId(ctx);

    const account = await ctx.prisma.account({ id: accountId });
    return account.role === 'OWNER';
  }
);
