import { arg, extendType, stringArg } from 'nexus';

import * as Joi from '@hapi/joi';

import sendEmail from '../../services/email';
import formatJoiErrors from '../../utils';
import { createInvitationSchema } from './Invitation.schema';

export const Mutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createInvitation', {
      type: 'Invitation',
      args: {
        email: stringArg(),
        role: arg({
          type: 'InvitationRole',
          required: true,
        }),
      },
      resolve: async (_parent, args, ctx) => {
        const {
          value: { email, role },
          error,
        } = Joi.validate(args, createInvitationSchema, { abortEarly: false });

        if (error) throw new Error(formatJoiErrors(error));

        const invitation = await ctx.prisma.createInvitation({
          email,
          role,
        });

        // send invitation email with token
        // Embed in mail and send email
        const link = `${process.env.FRONTEND_URL}/invitations/${invitation.id}/`;
        sendEmail(email, 'Create an account!', link).catch(e => {
          throw new Error(e);
        });

        return invitation;
      },
    });
  },
});
