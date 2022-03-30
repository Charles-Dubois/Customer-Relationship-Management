const express = require("express");
const bcrypt = require("bcrypt");
const Register = require("../models/registerModel");
const router = express.Router();
const loginJoi = require("../Joi/loginJoi");
const secret = require("../private/secret");

function validLogin(req, res, next) {
  const validation = loginJoi.validate(req.body);
  if (validation.error) {
    return res.status(400).json({
      message: "error 400 bad request",
      description: validation.error.details[0].message,
    });
  }
  next();
}

router.get("/", (_req, res) => {
  res.json({
    message:
      "Use the post method with in the body an email and a password to connect",
  });
});

router.post("/", validLogin, async (req, res) => {
  const { email, password } = req.body;
  let result;

  try {
    result = await Register.findOne({ email });
    const ckeckPassword = await bcrypt.compare(password, result.password);
    if (!result || !ckeckPassword) {
      return res.json({ message: "This email or the password is not valid" });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "bad request 400" });
  }

  res.json({ message: `${result.email} connected ! ` });
  //
});

module.exports = router;
