const express = require("express");
const jwt = require("jsonwebtoken");
const secret = require("../private/secret");
const contactJoi = require("../Joi/contactJoi");
const Contact = require("../models/contactModel");
const validContact = require("../middlewares/validContact");
const router = express.Router();

function cookieChecker(req, res, next) {
  try {
    req.userID = jwt.verify(req.cookies.jwt, secret);
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Please login" });
  }
  next();
}

router.use(cookieChecker);

router.post("/", validContact, async (req, res) => {
  let result;
  try {
    req.body.userID = req.userID.id;
    result = await Contact.create(req.body);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "error 400 bad request" });
  }

  res.json({ message: "contact added", description: result });
});

router.get("/", async (req, res) => {
  let result;
  try {
    result = await Contact.find(req.userID);
  } catch (error) {
    console.log(err);
    return res.status(400).json({ message: "bad resquest 400" });
  }
  res.json(result);
});
module.exports = router;
