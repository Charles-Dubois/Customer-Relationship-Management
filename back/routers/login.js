const express = require("express");
const Register = require("../models/registerModel");
const router = express.Router();
const loginJoi = require("../Joi/loginJoi");

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
  let result;
  try {
    result = await Register.find(req.body);
    if (result.length === 0) {
      return res.json({ message: "This email or the password is not valid" });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "bad request 400" });
  }

  res.json(result);
});

module.exports = router;
