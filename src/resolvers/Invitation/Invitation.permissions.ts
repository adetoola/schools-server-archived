import { and } from 'graphql-shield';

import { isAuthenticatedUser } from '../Account/Account.rules';
import { isRoleOwner } from '../Owner/Owner.rules';
import { canCreateInvitation } from './Invitation.rules';

// TODO: use isRoleAdmin later
export const InvitationPermissions = {
  Mutation: and(isAuthenticatedUser, isRoleOwner, canCreateInvitation),
};
