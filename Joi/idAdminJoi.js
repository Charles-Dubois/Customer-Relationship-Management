const Joi = require("joi");
const queryJoi = Joi.object({
  id: Joi.string().max(70).required(),
});
module.exports = queryJoi;
