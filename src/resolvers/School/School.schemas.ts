import * as Joi from '@hapi/joi';

import { email, latitude, longitude, phone, string, uri } from '../../schemas';

export const createSchoolSchema = Joi.object().keys({
  title: string.required(),
  phone: phone.required(),
  uri: uri.required(),
  email: email.required(),
  location: Joi.object().keys({
    number: Joi.string().alphanum(),
    street: string,
    city: string,
    country: string,
    postalCode: string,
    nearestLandmark: string,
    geocode: Joi.object()
      .keys({
        latitude: latitude,
        longitude: longitude,
      })
      .and('latitude', 'longitude'),
  }),
});

export const updateSchoolSchema = Joi.object().keys({
  title: string,
  phone: phone,
  uri: uri,
  email: email,
});
