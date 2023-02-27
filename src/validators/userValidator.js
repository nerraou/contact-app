const Joi = require("joi");

const registerSchema = Joi.object({
  firstName: Joi.string().max(20).required(),
  lastName: Joi.string().max(20),
  phoneNumber: Joi.string().max(20).required(),
  password: Joi.string().max(100).min(5).required(),
});

module.exports = { registerSchema };
