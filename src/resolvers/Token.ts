import { prismaObjectType } from 'nexus-prisma';

export const Token = prismaObjectType({
  name: 'Token',
  definition(t) {
    t.prismaFields(['id', 'token']);
  },
});
