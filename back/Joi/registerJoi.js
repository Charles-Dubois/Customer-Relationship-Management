const Joi = require("joi");
const registerJoi = Joi.object({
  email: Joi.string().email().required(),

  password: Joi.string()
    .pattern(new RegExp("^(?=.*[A-Za-z])(?=.*\d)[0-9A-Za-z\d]{6,}$"))
    .required(),
});
module.exports = registerJoi;
