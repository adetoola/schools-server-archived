import { prismaObjectType } from 'nexus-prisma';

// @ts-ignore
export const Owner = prismaObjectType({
  name: 'Owner',
  definition(t) {
    t.prismaFields(['id', 'accountId', 'firstName', 'middleName', 'lastName', 'schools', 'createdAt', 'updatedAt']);
  },
});
