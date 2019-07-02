import * as Joi from '@hapi/joi';

import { email, phone, string, uri } from '../../schemas';

export const createSchoolSchema = Joi.object().keys({
  title: string.required(),
  phone: phone.required(),
  uri: uri.required(),
  email: email.required(),
});

export const updateSchoolSchema = Joi.object().keys({
  title: string,
  phone: phone,
  uri: uri,
  email: email,
}).strip;
