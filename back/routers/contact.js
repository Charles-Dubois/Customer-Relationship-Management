const express = require("express");
const jwt = require("jsonwebtoken");
const secret = require("../private/secret");

const router = express.Router();
function cookieChecker(req, res, next) {
  try {
    jwt.verify(req.cookies.jwt, secret);
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Please login" });
  }
  next();
}
router.get("/", cookieChecker, async (_req, res) => {
  res.json({
    message: "Connected",
  });
});
module.exports = router;
