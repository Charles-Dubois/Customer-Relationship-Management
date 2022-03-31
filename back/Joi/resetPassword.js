const Joi = require("joi");
const resetPasswordJoi = Joi.object({
  code: Joi.string().max(70).required(),
  password: Joi.string()
    .pattern(new RegExp("^(?=.*[0-9])([a-zA-Zd$@%*+-_!]{6,100})$"))
    .required(),
});
module.exports = resetPasswordJoi;
