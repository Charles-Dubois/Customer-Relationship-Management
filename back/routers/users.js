const express = require("express");
const router = express.Router();
//* conflict here with the last request
// const theLastRequest = require("../middlewares/theLastRequest");
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
  if (result.length === 0) {
    return res.json({ message: "Any user connected" });
  }
  res.json(result);
});

module.exports = router;
