import { prismaInputObjectType } from 'nexus-prisma';

export const GeocodeCreateInput = prismaInputObjectType({
  name: 'GeocodeCreateInput',
  definition(t) {
    t.prismaFields(['latitude', 'longitude']);
  },
});
