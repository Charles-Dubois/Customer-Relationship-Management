const Joi = require("joi");
const registerJoi = Joi.object({
  email: Joi.string().email().required(),

  password: Joi.string()
    .pattern(new RegExp("^(?=.*[0-9])([a-zA-Z\d$@%*+\-_!]{6,})$"))
    .required(),
});
module.exports = registerJoi;
