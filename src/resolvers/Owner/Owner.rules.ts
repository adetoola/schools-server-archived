import { rule } from 'graphql-shield';

import { Context } from '../../types';
import { getAccountId } from '../../utils';
import { getOwner } from './Owner.utils';

/**
 * Auth User account is role: "OWNER"
 *
 * @return boolean
 */
export const isRoleOwner = rule()(
  async (_parent, _args, ctx: Context): Promise<boolean> => {
    const accountId = await getAccountId(ctx);

    const account = await ctx.prisma.account({ id: accountId });
    return account.role === 'OWNER';
  }
);

/**
 * `Account` can create a new owner details
 * An `Account` can only have ONE single owner details
 * If one already exists, you can't create another
 *
 * @return boolean
 */
export const canCreateNewOwnerDetails = rule()(
  async (_parent, _args, ctx: Context): Promise<boolean> => {
    // owner should not exist - we can create a new one
    const ownerExists = await getOwner(ctx);
    return Boolean(!ownerExists);
  }
);

/**
 * `Account` owns the `Owner` model
 *
 * @return boolean
 */
export const canUpdateOwner = rule()(
  async (_parent, _args, ctx: Context): Promise<boolean> => {
    // owner already exists - we can update
    const ownerExists = await getOwner(ctx);
    return Boolean(ownerExists);
  }
);
