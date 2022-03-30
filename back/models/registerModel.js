const mongoose = require("mongoose");

const registerSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLenght: 6,
  },
});
const Register = mongoose.model("register", registerSchema);

module.exports = Register;
