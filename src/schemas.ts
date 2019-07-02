import * as Joi from '@hapi/joi';

// username
export const username = Joi.string()
  .alphanum()
  .min(3)
  .max(30)
  .trim();

// email
export const email = Joi.string()
  .email()
  .lowercase()
  .trim()
  .required();

// password
export const password = Joi.string()
  .regex(/^[a-zA-Z0-9]{8,30}$/)
  .required();

// token
export const token = Joi.string()
  .length(40)
  .required();

// names : firstName, middleName, lastName
export const name = Joi.string().regex(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);

// short strings : titles, addresses, cities etc
export const string = Joi.string();

// phone
export const phone = Joi.string()
  .length(11)
  .regex(/^(0{1})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7,8})$/);

// uri
export const uri = Joi.string().uri();
