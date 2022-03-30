const express = require("express");
const bcrypt = require("bcrypt");
const registerJoi = require("../Joi/registerJoi");
const router = express.Router();
const Register = require("../models/registerModel");
function validRegister(req, res, next) {
  const validation = registerJoi.validate(req.body);
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
      "Use the post method with in the body an email and a password to create an account",
  });
});

router.post("/", validRegister, async (req, res) => {
  let result;

  try {
    req.body.password = await bcrypt.hash(req.body.password, 12);
    result = await Register.create(req.body);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "This email is not availaible" });
  }

  res.status(201).json({ message: "user created", description: result });
});

module.exports = router;
