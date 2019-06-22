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

        const owner = await ctx.prisma.createOwner({
          firstName,
          middleName,
          lastName,
          account: { connect: { id: accountId } },
        });

        return owner;
      },
    });

    t.field('updateOwner', {
      type: 'Owner',
      args: {
        firstName: stringArg({ nullable: true }),
        middleName: stringArg({ nullable: true }),
        lastName: stringArg({ nullable: true }),
      },
      resolve: async (_parent, args, ctx) => {
        const accountId = getAccountId(ctx);
        const [owner] = await ctx.prisma.owners({
          where: {
            account: {
              id: accountId,
            },
          },
        });

        return ctx.prisma.updateOwner({
          where: {
            id: owner.id,
          },
          data: args,
        });
      },
    });
  },
});
