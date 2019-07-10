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

// See: https://stackoverflow.com/questions/3518504/regular-expression-for-matching-latitude-longitude-coordinates/31408260#31408260

// latitude (Latitude measurements range from –90° to +90°)
export const latitude = Joi.number()
  .min(-90)
  .max(90)
  .precision(6);
// export const latitude = Joi.string().regex(
//   /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/
// );

// longitude (Longitude measurements range from –180° to +180°)
export const longitude = Joi.number()
  .min(-180)
  .max(180)
  .precision(6);
// export const longitude = Joi.string().regex(
//   /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/
// );

// latlon
export const latlon = Joi.string().regex(
  /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/
);
