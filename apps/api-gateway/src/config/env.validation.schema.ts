import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().required(),
  PORT: Joi.number().required(),
  //AUTH_MS_URL: Joi.string().required(),
  //USER_MS_URL: Joi.string().required(),
});
