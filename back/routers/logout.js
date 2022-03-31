const express = require("express");
const router = express.Router();
const theLastRequest = require("../middlewares/theLastRequest");
router.get("/", theLastRequest, async (req, res) => {
  try {
    res.clearCookie("jwt");
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "not connected" });
  }

  res.json({
    message: "logout succes",
  });
});

module.exports = router;
