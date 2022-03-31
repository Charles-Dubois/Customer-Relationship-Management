const express = require("express");
const router = express.Router();
const theLastRequest = require("../middlewares/theLastRequest");
const Register = require("../models/registerModel");
router.get("/online", async (req, res) => {
  const parseDate = new Date(Date.now()) - 60000;
  const date = new Date(parseDate);

  let result;
  try {
    result = await Register.find({
      last_reqest: { $gte: date },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "error from users" });
  }
  res.json({ result });
});

module.exports = router;
