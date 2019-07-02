import { extendType, idArg, stringArg } from 'nexus';

import * as Joi from '@hapi/joi';

import formatJoiErrors from '../../utils';
import { getOwner } from '../Owner/Owner.utils';
import { createSchoolSchema, updateSchoolSchema } from './School.schemas';

export const Mutation = extendType({
  type: 'Mutation',
  definition(t): void {
    t.field('createSchool', {
      type: 'School',
      args: {
        title: stringArg(),
        phone: stringArg(),
        uri: stringArg(),
        email: stringArg(),
      },
      resolve: async (_parent, args, ctx) => {
        const { id } = await getOwner(ctx);

        const {
          error,
          value: { title, phone, uri, email },
        } = Joi.validate(args, createSchoolSchema, { abortEarly: false });

        if (error) throw new Error(formatJoiErrors(error));

        const school = await ctx.prisma.createSchool({
          title,
          phone,
          uri,
          email,
          owner: { connect: { id } },
        });

        return school;
      },
    });

    t.field('updateSchool', {
      type: 'School',
      args: {
        id: idArg(),
        title: stringArg({ nullable: true }),
        phone: stringArg({ nullable: true }),
        uri: stringArg({ nullable: true }),
        email: stringArg({ nullable: true }),
      },
      resolve: async (_parent, args, ctx) => {
        // remove id from args
        const { error, value } = Joi.validate(args, updateSchoolSchema, { abortEarly: false, stripUnknown: true });

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
