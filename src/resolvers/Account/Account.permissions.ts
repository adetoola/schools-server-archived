import { allow, not } from 'graphql-shield';

import { isAuthenticatedUser } from '../../permissions/rules';

export const AccountPermissions = {
  Query: {
    me: isAuthenticatedUser,
  },
  Mutation: {
    signup: not(isAuthenticatedUser),
    login: not(isAuthenticatedUser),
    signout: isAuthenticatedUser,
    verify: not(isAuthenticatedUser),
    requestVerificationMail: allow,
    requestPasswordReset: not(isAuthenticatedUser),
    passwordReset: not(isAuthenticatedUser),
  },
};
