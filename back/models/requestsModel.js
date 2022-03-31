const mongoose = require("mongoose");

const requestsSchema = mongoose.Schema({
  url: { type: String, required: true },
  verb: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  userID: {
    type: String,
  },
});
const Requests = mongoose.model("requests", requestsSchema);

module.exports = Requests;
