import { prismaExtendType } from 'nexus-prisma';

import { getAccountId } from '../../utils';

// @ts-ignore
export const Query = prismaExtendType({
  type: 'Query',
  definition(t) {
    t.field('getOwner', {
      type: 'Owner',
      resolve: async (_parent, _args, ctx) => {
        const accountId = getAccountId(ctx);

        const [owner] = await ctx.prisma.owners({
          where: {
            account: {
              id: accountId,
            },
          },
        });

        return owner;
      },
    });
  },
});
