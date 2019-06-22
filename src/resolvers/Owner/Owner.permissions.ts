import { allow, and } from 'graphql-shield';

import { canCreateNewOwnerDetails, canUpdateOwner, isRoleOwner } from './Owner.rules';

export const OwnerPermissions = {
  Query: {
    getOwner: allow,
  },
  Mutation: {
    createOwner: and(isRoleOwner, canCreateNewOwnerDetails),
    updateOwner: and(isRoleOwner, canUpdateOwner),
  },
};
