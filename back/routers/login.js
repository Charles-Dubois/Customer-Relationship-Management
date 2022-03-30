const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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

async function checkConnection(req, res, next) {
  req.body.result = "default value";
  req.body.error = { message: "This email or the password is not valid" };
  let { email, password, result, error } = req.body;

  try {
    result = await Register.findOne({ email });
    if (!result) {
      return res.json(error);
    }
    const ckeckPassword = await bcrypt.compare(password, result.password);
    if (!ckeckPassword) {
      return res.json(error);
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "bad request 400" });
  }
  next();
}

router.get("/", (_req, res) => {
  res.json({
    message:
      "Use the post method with in the body an email and a password to connect",
  });
});

router.post("/", validLogin, checkConnection, async (req, res) => {
  //   const token = jwt.sign({ id: user._id }, secret);
  //   console.log(token);
  res.json({ message: `${req.body.result} connected ! ` });
});

module.exports = router;
