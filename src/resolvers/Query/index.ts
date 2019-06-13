import { queryType } from "nexus";
import { getAccountId } from "../../utils";

export const Query = queryType({
  definition(t) {
    t.field("me", {
      type: "Account",
      resolve: (parent, args, ctx) => {
        const accountId = getAccountId(ctx);
        return ctx.prisma.account({ id: accountId });
      },
    });
  },
});
