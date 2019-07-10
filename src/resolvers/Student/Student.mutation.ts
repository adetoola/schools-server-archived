import { arg, extendType, stringArg } from 'nexus';

import * as Joi from '@hapi/joi';

import formatJoiErrors from '../../utils';
import { createStudentSchema } from './Student.schema';

export const Mutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createStudent', {
      type: 'Student',
      args: {
        firstName: stringArg(),
        lastName: stringArg(),
        middleName: stringArg({ nullable: true }),
        nameSuffix: arg({
          type: 'SuffixEnum',
          required: false,
        }),
        gender: arg({
          type: 'GenderEnum',
          required: false,
        }),
        ethnicity: arg({
          type: 'EthnicityEnum',
          required: false,
        }),
        nickname: stringArg({ nullable: true }),
        nin: stringArg({ nullable: true }),
        birthdate: stringArg(),
        language: arg({
          type: 'LanguageEnum',
          required: false,
        }),
        estimatedGradDate: stringArg({ nullable: true }),
        email: stringArg(),
        phone: stringArg({ nullable: true }),
      },
      resolve: async (_parent, args, ctx) => {
        const { error, value } = Joi.validate(args, createStudentSchema, { abortEarly: false });

        if (error) throw new Error(formatJoiErrors(error));

        return await ctx.prisma.createStudent({ ...value });
      },
    });
  },
});
