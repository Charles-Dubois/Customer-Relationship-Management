const Joi = require("joi");
const queryJoi = Joi.object({
  name: Joi.string().max(40),
  category: Joi.string().min(1).max(2),
  id: Joi.string().max(70),
});
module.exports = queryJoi;
