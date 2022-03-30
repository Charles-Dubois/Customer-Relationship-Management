const updateContactJoi = require("../Joi/updateContactJoi");
const updateContactBodyJoi = require("../Joi/updateContactBodyJoi");
function updateContact(req, res, next) {
  const validationBody = updateContactBodyJoi.validate(req.body);
  if (validationBody.error) {
    return res.status(400).json({
      message: "error 400 bad request",
      description: validationBody.error.details[0].message,
    });
  }

  const validation = updateContactJoi.validate(req.body.update);
  if (validation.error) {
    return res.status(400).json({
      message: "error 400 bad request",
      description: validation.error.details[0].message,
    });
  }
  next();
}

module.exports = updateContact;
