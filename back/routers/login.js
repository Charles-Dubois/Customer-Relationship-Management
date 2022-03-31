const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const validLogin = require("../middlewares/validLogin");
const checkConnection = require("../middlewares/checkConnection");
const secret = require("../private/secret");

router.get("/", (_req, res) => {
  res.json({
    message:
      "Use the post method with in the body an email and a password to connect",
  });
});

router.post("/", validLogin, checkConnection, async (req, res) => {
  let { result } = req.body;
  const token = jwt.sign(
    {
      data: "jwt",
    },
    secret,
    { expiresIn: 2629800000 }
  );

  res.cookie("jwt", token, { httpOnly: true, secure: false });
  res.json({ message: `${result.email} connected ! ` });
});

module.exports = router;
