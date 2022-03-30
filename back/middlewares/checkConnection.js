const Register = require("../models/registerModel");
const bcrypt = require("bcrypt");

async function checkConnection(req, res, next) {
  req.body.error = { message: "This email or the password is not valid" };
  let { email, password, error } = req.body;

  try {
    req.body.result = await Register.findOne({ email });
    if (!req.body.result) {
      return res.json(error);
    }
    const ckeckPassword = await bcrypt.compare(
      password,
      req.body.result.password
    );
    if (!ckeckPassword) {
      return res.json(error);
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "bad request 400" });
  }

  next();
}

module.exports = checkConnection;
