const idIsAdminJoi = require("../Joi/idAdminJoi");

function validLogin(req, res, next) {
  const validation = idIsAdminJoi.validate(req.body);
  if (validation.error) {
    return res.status(400).json({
      message: "error 400 bad request",
      description: validation.error.details[0].message,
    });
  }
  next();
}

module.exports = validLogin;
