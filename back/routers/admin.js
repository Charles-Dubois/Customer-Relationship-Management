const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const secret = require("../private/secret");
const Register = require("../models/registerModel");
const Contact = require("../models/contactModel");
const IdIsAdmin = require("../middlewares/idIsAdmin");
const validBodyDeleteAdmin = require("../middlewares/validBodyDeleteAdmin");
const theLastRequest = require("../middlewares/theLastRequest");

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

router.get("/", theLastRequest, async (_req, res) => {
  res.json({
    message: "use the delete method to remove user",
  });
});

router.delete(
  "/",
  validBodyDeleteAdmin,
  IdIsAdmin,
  theLastRequest,
  async (req, res) => {
    try {
      await Contact.deleteMany({ userID: req.body.id });
      await Register.findByIdAndDelete(req.body.id);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "bad request 400" });
    }

    res.json({ message: "user & his contacts removed" });
  }
);

module.exports = router;
