import { and } from 'graphql-shield';

import { isRoleOwner } from '../Owner/Owner.rules';
import { canCreateSchool, canUpdateSchool } from './School.rules';

export const schoolPermissions = {
  Query: {},
  Mutation: {
    createSchool: and(isRoleOwner, canCreateSchool),
    updateSchool: and(isRoleOwner, canUpdateSchool),
  },
};
