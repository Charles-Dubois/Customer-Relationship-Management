const jwt = require("jsonwebtoken");
const resetPasswordJoi = require("../Joi/resetPassword");
const { secret } = process.env;
function cookiePasswordCheck(req, res, next) {
  const validation = resetPasswordJoi.validate(req.body);
  if (validation.error) {
    return res.status(400).json({
      message: "error 400 bad request",
      description: validation.error.details[0].message,
    });
  }

  try {
    jwt.verify(req.cookies.resetPassordJWT, secret);
  } catch (err) {
    console.log(`error in authReset.js ==>` + err);
    return res.status(401).json({ message: "The current link has expirated" });
  }
  next();
}
module.exports = cookiePasswordCheck;
