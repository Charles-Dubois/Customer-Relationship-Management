const Contact = require("../models/contactModel");
const queryJoi = require("../Joi/queryJoi");
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
    if (query[0] !== "name") {
      console.log("yes");
    }
    if (query.length > 1) {
      return res.json({ message: "you can use just one query param" });
    }
    if (query[0] !== "name" && query[0] !== "category" && query[0] !== "id") {
      return res.json({ message: "the acutal query param is not valid" });
    }
    let queryResult;
    try {
      queryResult = await Contact.find(req.query);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "bad resquest 400" });
    }
    if (queryResult.length < 1) {
      return res.json({ message: "any contact correspond" });
    }

    return res.json(queryResult);
  }
  next();
}

module.exports = checkQuery;
