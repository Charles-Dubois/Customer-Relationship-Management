const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { secret } = process.env;
const Contact = require("../models/contactModel");

const validContact = require("../middlewares/validContact");
const updateContact = require("../middlewares/updateContact");
const checkQuery = require("../middlewares/checkQuery");
const theLastRequest = require("../middlewares/theLastRequest");

const router = express.Router();

async function cookieChecker(req, res, next) {
  try {
    req.userID = jwt.verify(req.cookies.jwt, secret);
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Please login" });
  }
  next();
}
router.use(cookieChecker);
router.use(theLastRequest);

router.get("/", checkQuery, async (req, res) => {
  let data, nb, result;

  try {
    data = await Contact.find({ userID: req.userID.id });
    nb = await Contact.find().count();
    result = { nb, data };
  } catch (error) {
    console.log(err);
    return res.status(400).json({ message: "bad resquest 400" });
  }
  res.json(result);
});

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

router.put("/", updateContact, async (req, res) => {
  const { contactID, update } = req.body;

  let result;
  try {
    await Contact.findByIdAndUpdate(contactID, update);
    result = await Contact.findById(contactID);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "The id is not valid" });
  }
  res.json(result);
});

router.delete("/", async (req, res) => {
  try {
    await Contact.findOneAndDelete(req.body);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "Any contact correspond to this id" });
  }
  res.json({ message: "contact deleted ! " });
});

module.exports = router;
