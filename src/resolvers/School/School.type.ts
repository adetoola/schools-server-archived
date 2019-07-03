import { prismaInputObjectType, prismaObjectType } from 'nexus-prisma';

export const School = prismaObjectType({
  name: 'School',
  definition(t) {
    t.prismaFields(['id', 'title', 'email', 'phone', 'uri', 'owner', 'locations', 'createdAt', 'updatedAt']);
  },
});

export const SchoolUpdateInput = prismaInputObjectType({
  name: 'SchoolUpdateInput',
  definition(t) {
    t.prismaFields(['email', 'phone', 'title', 'uri']);
  },
});
