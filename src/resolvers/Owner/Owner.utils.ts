import { Owner } from '../../generated/prisma-client';
import { Context } from '../../types';
import { getAccountId } from '../../utils';

/**
 * Get owner of auth account
 *
 * @param ctx
 */
export async function getOwner(ctx: Context): Promise<Owner> {
  const accountId = getAccountId(ctx);
  // get owner id.
  const [owner] = await ctx.prisma.owners({
    where: {
      account: {
        id: accountId,
      },
    },
  });

  return owner;
}
