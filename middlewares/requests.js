const jwt = require("jsonwebtoken");
const Requests = require("../models/requestsModel");
const { secret } = process.env;

async function requestRegister(req, res, next) {
  let userID;
  try {
    userID = jwt.verify(req.cookies.jwt, secret);
    userID = userID.id;
  } catch (err) {
    console.log(`error from requests.js ==> ${err}`);
    userID = "Request from user not connected";
  }
  const currentRequest = {
    url: req.originalUrl,
    verb: req.method,
    date: new Date(),
    userID: userID,
  };

  try {
    await Requests.create(currentRequest);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }

  next();
}

module.exports = requestRegister;
