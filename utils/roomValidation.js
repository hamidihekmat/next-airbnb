import Joi from 'joi';

const schema = Joi.object({
  user: Joi.string().required(),
  heading: Joi.string().required(),
  selectedFile: Joi.string().required(),
  guests: Joi.number().required(),
  bed: Joi.number().required(),
  bedRooms: Joi.number().required(),
  bathRooms: Joi.number().required(),
  kitchen: Joi.boolean().required(),
  parking: Joi.boolean().required(),
  wifi: Joi.boolean().required(),
});

export const validateRoom = (data) => {
  const validation = schema.validate(data);
  return validation;
};
