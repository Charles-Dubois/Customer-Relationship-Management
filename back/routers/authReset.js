const express = require("express");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const { validate: uuidValidate } = require("uuid");
const router = express.Router();
const Register = require("../models/registerModel");
const generateToken = require("../middlewares/passwordToken");
const cookiePasswordCheck = require("../middlewares/cookiePasswordCheck");

router.get("/reset/:userId", generateToken, async (req, res) => {
  res.json({
    uri: `http://localhost:8000/auth/reset/${req.userID}`,
    key: uuidv4(),
    description: "This code expire in 10 minutes",
  });
});

router.post("/reset/:userId", cookiePasswordCheck, async (req, res) => {
  const validCode = uuidValidate(req.body.code);
  if (!validCode) {
    return res.status(400).json({ message: "the code is not valid" });
  }

  try {
    const hashPassword = await bcrypt.hash(req.body.password, 12);
    const update = { password: hashPassword };
    await Register.findByIdAndUpdate(req.params.userId, update);
    res.clearCookie("resetPassordJWT");
  } catch (error) {
    console.log(`error from authReset.js  ==> ${error}`);
    return res.json({ message: "error 400 bad request" });
  }

  res.json({ message: "password changed!" });
});

module.exports = router;
