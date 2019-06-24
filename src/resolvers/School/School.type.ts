import { prismaObjectType } from 'nexus-prisma';

// @ts-ignore
export const School = prismaObjectType({
  name: 'School',
  definition(t) {
    t.prismaFields(['id', 'title', 'email', 'phone', 'uri', 'owner', 'locations', 'createdAt', 'updatedAt']);
  },
});
