import { prismaObjectType } from "nexus-prisma";

export const Verification = prismaObjectType({
  name: "Verification",
  definition(t) {
    t.prismaFields(["id", "token"]);
  },
});
