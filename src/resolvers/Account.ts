import { prismaObjectType } from "nexus-prisma";
import * as distanceInWords from "date-fns/distance_in_words";

export const Account = prismaObjectType({
  name: "Account",
  definition(t) {
    t.string("lastSeen", {
      resolve: ({ lastLogin }, args, ctx) => distanceInWords(new Date(), new Date(lastLogin), { addSuffix: true }),
    });
    t.prismaFields(["id", "username", "email", "createdAt", "updatedAt", "lastLogin"]);
  },
});
