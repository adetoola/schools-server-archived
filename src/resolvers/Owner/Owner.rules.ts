import { rule } from 'graphql-shield';

import { Context } from '../../types';
import { getAccountId } from '../../utils';

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
    const accountId = getAccountId(ctx);
    const ownerExists = await ctx.prisma.owners({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    return ownerExists.length === 0;
  }
);

/**
 * `Account` owns the `Owner` model
 *
 * @return boolean
 */
export const canUpdateOwner = rule()(
  async (_parent, _args, ctx: Context): Promise<boolean> => {
    const accountId = await getAccountId(ctx);

    const ownerExists = await ctx.prisma.owners({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    return ownerExists.length === 1;
  }
);
