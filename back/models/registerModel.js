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
  contacts: [{ type: mongoose.Types.ObjectId, ref: "contacts" }],
});
const Register = mongoose.model("users", registerSchema);

module.exports = Register;
