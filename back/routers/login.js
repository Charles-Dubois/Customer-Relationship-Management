const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const validLogin = require("../middlewares/validLogin");
const checkConnection = require("../middlewares/checkConnection");
const { secret } = process.env;
const Register = require("../models/registerModel");

router.get("/", (_req, res) => {
  res.json({
    message:
      "Use the post method with in the body an email and a password to connect",
  });
});

router.post("/", validLogin, checkConnection, async (req, res) => {
  let { result } = req.body;
  const lastRequest = { last_reqest: new Date(Date.now()) };
  try {
    await Register.findOneAndUpdate(result.email, lastRequest);
  } catch (error) {
    console.log(error);

    return res.json({ message: "error 400" });
  }

  const token = jwt.sign(
    {
      data: "jwt",
      id: result._id,
    },
    secret,
    { expiresIn: 2629800000 }
  );

  //jwt.sign({ id: result._id }, secret);
  res.cookie("jwt", token, { httpOnly: true, secure: false });
  res.json({ message: `${result.email} connected ! ` });
});

module.exports = router;
