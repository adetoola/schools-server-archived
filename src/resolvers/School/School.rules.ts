import { not, rule } from 'graphql-shield';

import { Context } from '../../types';
import { canCreateNewOwnerDetails } from '../Owner/Owner.rules';
import { getOwner } from '../Owner/Owner.utils';

/**
 * Owner details must already be filled.
 * As, we need the `owner.id` to connect the school created
 *
 * So, if `canCreateNewOwnerDetails` is true, then you can't create a new school.
 */
export const canCreateSchool = not(canCreateNewOwnerDetails);

/**
 * School must belong to authenticated user.
 */
export const canUpdateSchool = rule()(
  async (_parent, args, ctx: Context): Promise<boolean> => {
    // get ownerId;
    const owner = await getOwner(ctx);

    // check if the present args.id is among the included schools retrieved
    const [exists] = await ctx.prisma.owner({ id: owner.id }).schools({
      where: {
        id: args.id,
      },
      first: 1,
    });

    return Boolean(exists);
  }
);
