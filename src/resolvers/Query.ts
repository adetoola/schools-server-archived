import { getAccountId } from "../utils";
import { stringArg, idArg, queryType } from "nexus";

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
