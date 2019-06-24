import * as Joi from '@hapi/joi';

import { string } from '../../schemas';

export const createOwnerSchema = Joi.object().keys({
  firstName: string.required(),
  middleName: string,
  lastName: string.required(),
});
