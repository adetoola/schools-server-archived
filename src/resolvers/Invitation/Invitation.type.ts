import { enumType } from 'nexus';
import { prismaObjectType } from 'nexus-prisma';

export const Invitation = prismaObjectType({
  name: 'Invitation',
  definition(t) {
    t.prismaFields(['id', 'createdAt', 'email', 'role']);
  },
});

export const InvitationEnum = enumType({
  name: 'InvitationEnum',
  members: ['ADMIN', 'STAFF', 'TEACHER', 'GUARDIAN', 'STUDENT'],
});
