const express = require("express");
const app = express();
const env = require("dotenv").config();
const mongoose = require("./db/mongoose");

app.set("port", process.env.PORT || 8080);
const PORT = app.get("port");
app.get("/", (req, res) => {
  res.send("Hello node");
});
app.listen(PORT, () => {
  console.log(`${PORT}포트`);
});
