require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const mongoKey = require("./private/mongoKey");
const registerRouter = require("./routers/register");
const loginRouter = require("./routers/login");
const contactRouter = require("./routers/contact");
const logoutRouter = require("./routers/logout");
const adminRouter = require("./routers/admin");
const usersRouter = require("./routers/users");
const requestsStatsRouter = require("./routers/requestsStats");
const authResetRouter = require("./routers/authReset");
const requestRegister = require("./middlewares/requests");
const { PORT, MONGODB_URI, API_KEY } = process.env;
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(console.log("connected to mongo"))
  .catch((err) => console.log(err));

app.use(requestRegister);

app.use("/register", registerRouter);

app.use("/login", loginRouter);

app.use("/contact", contactRouter);

app.use("/logout", logoutRouter);

app.use("/admin", adminRouter);

app.use("/users", usersRouter);

app.use("/requests", requestsStatsRouter);

app.use("/auth", authResetRouter);

app.get("/", (_req, res) => {
  res.send("Customer Relationship Management");
});

app.get("*", (_req, res) => {
  res.status(404).send("error 404");
});
app.listen(port, () => console.log(`listen on port ${PORT}`));
