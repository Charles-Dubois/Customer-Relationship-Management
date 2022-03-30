const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongoKey = require("./private/mongoKey");
const PORT = 8000;
app.use(express.json());
mongoose
  .connect(mongoKey, { useNewUrlParser: true })
  .then(console.log("connected to mongo"))
  .catch((err) => console.log(err));

app.get("/", (_req, res) => {
  res.send("hello world");
});
app.listen(PORT, () => console.log(`listen on port ${PORT}`));
