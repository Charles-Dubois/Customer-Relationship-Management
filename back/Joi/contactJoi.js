const Joi = require("joi");
const contactJoi = Joi.object({
  name: Joi.string().min(2).max(40).required(),
  email: Joi.string().email().required(),
  description: Joi.string().max(250),
  category: Joi.string().min(1).max(2).pattern(new RegExp("^[0-9]$")),
});
module.exports = contactJoi;
