import * as distanceInWords from 'date-fns/distance_in_words';
import { prismaObjectType } from 'nexus-prisma';

export const Account = prismaObjectType({
  name: 'Account',
  definition(t) {
    t.string('lastSeen', {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      resolve: ({ lastLogin }, _args, _ctx) => distanceInWords(new Date(), new Date(lastLogin), { addSuffix: true }),
    });
    t.prismaFields(['id', 'username', 'email', 'createdAt', 'updatedAt', 'lastLogin']);
  },
});
