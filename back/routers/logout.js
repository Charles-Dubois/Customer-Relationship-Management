const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.clearCookie("jwt");
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "bad request 400" });
  }

  res.json({
    message: "logout succes",
  });
});

module.exports = router;
