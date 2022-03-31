const jwt = require("jsonwebtoken");
const Register = require("../models/registerModel");
const Contact = require("../models/contactModel");
const queryJoi = require("../Joi/queryJoi");
const secret = require("../private/secret");
async function checkQuery(req, res, next) {
  if (req.query) {
    const validation = queryJoi.validate(req.query);
    if (validation.error) {
      return res.status(400).json({
        message: "error 400 bad request",
        description: validation.error.details[0].message,
      });
    }
    const query = Object.keys(req.query);
    if (query.length > 1) {
      return res.json({ message: "you can use just one query param" });
    }

    if (query.length === 1) {
      if (query[0] !== "name" && query[0] !== "category" && query[0] !== "id") {
        return res.json({ message: "the acutal query param is not valid" });
      }
      let queryResult;
      try {
        let currentToken = jwt.verify(req.cookies.jwt, secret);
        queryResult = await Contact.find({ userID: currentToken.id }).find(
          req.query
        );
      } catch (error) {
        console.log(error);
        return res
          .status(400)
          .json({ message: "bad resquest from check query" });
      }
      if (queryResult.length < 1) {
        return res.json({ message: "any contact correspond" });
      }
      return res.json(queryResult);
    }
  }
  next();
}

module.exports = checkQuery;
