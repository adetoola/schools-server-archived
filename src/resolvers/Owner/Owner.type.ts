import { prismaObjectType } from 'nexus-prisma';

// @ts-ignore
export const Owner = prismaObjectType({
  name: 'Owner',
  definition(t) {
    t.prismaFields(['id', 'firstName', 'middleName', 'lastName', 'account', 'schools', 'createdAt', 'updatedAt']);
  },
});
