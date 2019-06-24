import * as Joi from '@hapi/joi';

import { email, password, token, username } from '../../schemas';

// signUp -> username, email, password
export const signupSchema: Joi.ObjectSchema = Joi.object().keys({
  username,
  email,
  password,
});

// login -> email, password
export const loginSchema: Joi.ObjectSchema = Joi.object().keys({
  email,
  password,
});

// email -> email
export const emailSchema: Joi.ObjectSchema = Joi.object().keys({
  email,
});

// token -> token
export const tokenSchema: Joi.ObjectSchema = Joi.object().keys({
  token,
});

// reset-password -> token, pasword
export const resetPasswordSchema: Joi.ObjectSchema = Joi.object().keys({
  token,
  password,
});
