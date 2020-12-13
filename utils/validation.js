import Joi from 'joi';

const schema = Joi.object({
  firstName: Joi.string(),
  lastName: Joi.string(),
  email: Joi.string().email(),
  password: Joi.string(),
});

export const validate = (data) => {
  const validation = schema.validate(data);
  return validation;
};
