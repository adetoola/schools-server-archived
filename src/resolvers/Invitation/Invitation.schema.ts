import * as Joi from '@hapi/joi';

import { email } from '../../schemas';

export const createInvitationSchema = Joi.object().keys({
  email: email,
  role: Joi.string().allow(['ADMIN', 'STAFF', 'TEACHER', 'GUARDIAN', 'STUDENT']),
});
