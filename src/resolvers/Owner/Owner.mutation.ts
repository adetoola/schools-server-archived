import { extendType, stringArg } from 'nexus';

import { getAccountId } from '../../utils';

export const Mutation = extendType({
  type: 'Mutation',
  definition(t): void {
    t.field('createOwner', {
      type: 'Owner',
      args: {
        firstName: stringArg(),
        middleName: stringArg({ nullable: true }),
        lastName: stringArg(),
      },
      resolve: async (_parent, { firstName, middleName, lastName }, ctx) => {
        const accountId = getAccountId(ctx);
        if (!accountId) throw new Error('You are not authenticated');
        const owner = await ctx.prisma.createOwner({
          firstName,
          middleName,
          lastName,
          accountId,
        });

        return owner;
      },
    });
  },
});
