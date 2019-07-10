import * as BaseJoi from '@hapi/joi';
import * as Extension from '@hapi/joi-date';

import { email, phone, string } from '../../schemas';

const Joi = BaseJoi.extend(Extension);

export const createStudentSchema = Joi.object().keys({
  firstName: string.required(),
  lastName: string.required(),
  middleName: string,
  nameSuffix: Joi.string().allow(['JUNIOR', 'I', 'II', 'III', 'IV', 'SENIOR']),
  gender: Joi.string().allow(['MALE', 'FEMALE', 'OTHER', 'UNKNOWN']),
  ethnicity: Joi.string().allow([
    'AFRICAN',
    'ASIAN',
    'HISPANIC',
    'PACIFIC ISLANDER',
    'INDIAN',
    'MIDDLE EASTERN',
    'MIXED RACE',
    'WHITE',
    'INDIGENOUS',
    'AMERICAN INDIAN OR NATIVE ALASKAN',
    'UNKNOWN',
    'OTHER',
  ]),
  nickname: string,
  nin: string,
  birthdate: Joi.date()
    .format('YYYY-MM-DD')
    .required(),
  language: Joi.string().allow(['ENGLISH', 'IGBO', 'HAUSA', 'YORUBA', 'FRENCH', 'SPANISH']),
  estimatedGradDate: Joi.date().format('YYYY-MM-DD'),
  email: email.required(),
  phone: phone,
});
