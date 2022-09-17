const express = require("express");
const app = express();
const env = require("dotenv").config();
const cookieParser = require("cookie-parser");

const userRouter = require("../routes/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set("port", process.env.PORT || 8080);
const PORT = app.get("port");
app.get("/", (req, res) => {
  res.send("Hello node");
});

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`${PORT}포트`);
});
