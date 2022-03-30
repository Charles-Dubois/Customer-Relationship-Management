const Joi = require("joi");
const loginJoi = Joi.object({
  email: Joi.string().email().required(),

  password: Joi.string().max(100).required(),
});
module.exports = loginJoi;
