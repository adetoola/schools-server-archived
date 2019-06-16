import { isAuthenticatedUser } from '../../permissions/rules';

export const OwnerPermissions = {
  Query: {},
  Mutation: {
    createOwner: isAuthenticatedUser,
  },
};
