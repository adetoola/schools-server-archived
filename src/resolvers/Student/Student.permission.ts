import { not } from 'graphql-shield';

import { isAuthenticatedUser } from '../Account/Account.rules';

export const StudentPermissions = {
  Mutation: {
    createStudent: not(isAuthenticatedUser),
  },
};
