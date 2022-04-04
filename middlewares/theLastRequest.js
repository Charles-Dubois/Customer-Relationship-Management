const jwt = require("jsonwebtoken");
const Register = require("../models/registerModel");
const { secret } = process.env;

async function theLastRequest(req, res, next) {
  const lastRequest = { last_reqest: new Date(Date.now()) };
  try {
    req.userID = jwt.verify(req.cookies.jwt, secret);
    await Register.findByIdAndUpdate(req.userID.id, lastRequest);
  } catch (error) {
    console.log(error);

    //* conflict here !

    res.status(400).json({ message: "not connected" });
  }
  next();
}

module.exports = theLastRequest;
