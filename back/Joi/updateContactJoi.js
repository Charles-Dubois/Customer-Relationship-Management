const Joi = require("joi");
const updateContactJoi = Joi.object({
  name: Joi.string().min(2).max(40),
  email: Joi.string().email(),
  description: Joi.string().max(250),
  category: Joi.string().min(1).max(2).pattern(new RegExp("^[0-9]$")),
});
module.exports = updateContactJoi;
