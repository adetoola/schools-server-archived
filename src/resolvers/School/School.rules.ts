import { not } from 'graphql-shield';

import { canCreateNewOwnerDetails } from '../Owner/Owner.rules';

/**
 * Owner details must already be filled.
 * As, we need the `owner.id` to connect the school created
 *
 * So, if `canCreateNewOwnerDetails` is true, then you can't create a new school.
 */
export const canCreateSchool = not(canCreateNewOwnerDetails);
