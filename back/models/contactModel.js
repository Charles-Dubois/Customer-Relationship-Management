const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  userID: { type: mongoose.Types.ObjectId, ref: "contacts", required: true },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: { type: String },
});
const Contact = mongoose.model("contacts", contactSchema);

module.exports = Contact;
