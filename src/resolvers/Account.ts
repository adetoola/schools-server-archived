import { prismaObjectType } from "nexus-prisma";

export const Account = prismaObjectType({
  name: "Account",
  definition(t) {
    t.prismaFields(["id", "username", "email"]);
  },
});
