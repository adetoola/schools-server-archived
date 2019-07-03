import { arg, idArg, stringArg } from 'nexus';
import { prismaExtendType } from 'nexus-prisma';

import * as Joi from '@hapi/joi';

import formatJoiErrors from '../../utils';
import { getOwner } from '../Owner/Owner.utils';
import { createSchoolSchema, updateSchoolSchema } from './School.schemas';

export const Mutation = prismaExtendType({
  type: 'Mutation',
  definition(t): void {
    t.field('createSchool', {
      type: 'School',
      args: {
        title: stringArg(),
        phone: stringArg(),
        uri: stringArg(),
        email: stringArg(),
        location: arg({
          type: 'LocationCreateInput',
          nullable: true,
        }),
      },
      resolve: async (_parent, args, ctx) => {
        const { id } = await getOwner(ctx);

        const {
          error,
          value: { title, phone, uri, email },
        } = Joi.validate(args, createSchoolSchema, { abortEarly: false, stripUnknown: true });

        if (error) throw new Error(formatJoiErrors(error));

        const {
          number,
          street,
          other,
          city,
          country,
          postalCode,
          nearestLandmark,
          geocode: { latitude, longitude },
        } = args.location;

        const school = await ctx.prisma.createSchool({
          title,
          phone,
          uri,
          email,
          owner: { connect: { id } },
          locations: {
            create: [
              {
                number,
                street,
                other,
                city,
                country,
                postalCode,
                nearestLandmark,
                geocode: {
                  create: {
                    latitude,
                    longitude,
                  },
                },
              },
            ],
          },
        });

        return school;
      },
    });

    t.field('updateSchool', {
      type: 'School',
      args: {
        id: idArg(),
        school: arg({
          type: 'SchoolUpdateInput',
        }),
      },
      resolve: async (_parent, args, ctx) => {
        // remove id from args
        const { error, value } = Joi.validate(args.school, updateSchoolSchema, {
          abortEarly: false,
          stripUnknown: true,
        });

        if (error) throw new Error(formatJoiErrors(error));

        const school = await ctx.prisma.updateSchool({
          data: value,
          where: { id: args.id },
        });
        return school;
      },
    });
  },
});
