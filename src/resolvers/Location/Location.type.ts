import { prismaInputObjectType } from 'nexus-prisma';

export const LocationCreateInput = prismaInputObjectType({
  name: 'LocationCreateInput',
  definition(t) {
    t.string('number');
    t.string('street');
    t.string('other', { nullable: true });
    t.string('city');
    t.string('country');
    t.string('postalCode');
    t.string('nearestLandmark');
    t.field('geocode', { type: 'GeocodeCreateInput' });
  },
});
