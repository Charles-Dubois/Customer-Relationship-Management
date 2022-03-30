const express = require("express");
const jwt = require("jsonwebtoken");
const { find } = require("../models/registerModel");
const router = express.Router();
const secret = require("../private/secret");
const Register = require("../models/registerModel");

async function cookieCheckerAdmin(req, res, next) {
  try {
    req.userID = jwt.verify(req.cookies.jwt, secret);
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Please login" });
  }
  let result;
  try {
    result = await Register.findById(req.userID.id);
    result = result.isAdmin;
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Reserved to admins" });
  }
  if (!result) {
    return res.status(401).json({ message: "Reserved to admins" });
  }

  next();
}
router.use(cookieCheckerAdmin);

router.get("/", (req, res) => {
  res.json({
    message: "hello from admin",
  });
});

module.exports = router;
