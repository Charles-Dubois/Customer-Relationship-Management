const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongoKey = require("./private/mongoKey");
const registerRouter = require("./routers/register");
const loginRouter = require("./routers/login");
const PORT = 8000;
app.use(express.json());
mongoose
  .connect(mongoKey, { useNewUrlParser: true })
  .then(console.log("connected to mongo"))
  .catch((err) => console.log(err));
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.get("/", (_req, res) => {
  res.send("Customer Relationship Management");
});

app.get("*", (_req, res) => {
  res.status(404).send("error 404");
});
app.listen(PORT, () => console.log(`listen on port ${PORT}`));
