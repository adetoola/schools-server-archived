import { prismaExtendType } from 'nexus-prisma';

import { getAccountId } from '../../utils';

export const Query = prismaExtendType({
  type: 'Query',
  definition(t) {
    t.field('me', {
      type: 'Account',
      resolve: (_parent, _args, ctx) => {
        const accountId = getAccountId(ctx);
        return ctx.prisma.account({ id: accountId });
      },
    });
  },
});
