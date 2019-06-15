import * as Joi from '@hapi/joi';

// username
const username = Joi.string()
  .alphanum()
  .min(3)
  .max(30)
  .trim();

// email
const email = Joi.string()
  .email()
  .lowercase()
  .trim()
  .required();

// password
const password = Joi.string()
  .regex(/^[a-zA-Z0-9]{8,30}$/)
  .required();

// token
const token = Joi.string().required();

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

// reset-password -> token, pasword
export const resetPasswordSchema: Joi.ObjectSchema = Joi.object().keys({
  token,
  password,
});
