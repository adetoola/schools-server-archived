import { enumType } from 'nexus';
import { prismaObjectType } from 'nexus-prisma';

export const Invitation = prismaObjectType({
  name: 'Invitation',
  definition(t) {
    t.prismaFields(['id', 'createdAt', 'email', 'role']);
  },
});

export const InvitationRole = enumType({
  name: 'InvitationRole',
  members: ['ADMIN', 'STAFF', 'TEACHER', 'GUARDIAN', 'STUDENT'],
});
