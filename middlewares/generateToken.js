const jwt = require("jsonwebtoken");
const Register = require("../models/registerModel");
const { secret } = process.env;

async function generateToken(req, res, next) {
  let user;
  try {
    user = await Register.findOne(req.params);
    req.userID = user.id;
  } catch (error) {
    console.log(`Error from paswwordToken.js  == >>  ${error}`);

    return res.status(400).json({ message: "email not valid" });
  }

  const token = jwt.sign(
    {
      data: "resetPassordJWT",
      id: user._id,
    },
    secret,
    { expiresIn: 600000 }
  );

  res.cookie("resetPassordJWT", token, { httpOnly: true, secure: false });
  next();
}

module.exports = generateToken;
