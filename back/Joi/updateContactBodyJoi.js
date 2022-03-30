const Joi = require("joi");
const updateContactBodyJoi = Joi.object({
  contactID: Joi.string().min(2).max(40).required(),
  update: Joi.object().required(),
});
module.exports = updateContactBodyJoi;
