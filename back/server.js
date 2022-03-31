const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const mongoKey = require("./private/mongoKey");
const registerRouter = require("./routers/register");
const loginRouter = require("./routers/login");
const contactRouter = require("./routers/contact");
const logoutRouter = require("./routers/logout");
const adminRouter = require("./routers/admin");
const usersRouter = require("./routers/users");

const requestRegister = require("./middlewares/requests");
const PORT = 8000;

app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(mongoKey, { useNewUrlParser: true })
  .then(console.log("connected to mongo"))
  .catch((err) => console.log(err));

app.use(requestRegister);

app.use("/register", registerRouter);

app.use("/login", loginRouter);

app.use("/contact", contactRouter);

app.use("/logout", logoutRouter);

app.use("/admin", adminRouter);

app.use("/users", usersRouter);

app.get("/", (_req, res) => {
  res.send("Customer Relationship Management");
});

app.get("*", (_req, res) => {
  res.status(404).send("error 404");
});
app.listen(PORT, () => console.log(`listen on port ${PORT}`));
