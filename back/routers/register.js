const express = require("express");
const mongoose = require("mongoose");
const registerJoi = require("../Joi/registerJoi");
const router = express.Router();

function validRegister(req, res, next) {
  const validation = registerJoi.validate(req.body);
  if (validation.error) {
    return res.status(400).json({
      message: "error 400 bad request",
      description: validation.error.details[0].message,
    });
  }
  next();
}

router.get("/", (_req, res) => {
  res.json({
    message:
      "use the post method with in the body an email and a password to connect",
  });
});

router.post("/", validRegister, async (req, res) => {
  res.status(201).json({ message: "user created", description: req.body });
});

module.exports = router;
