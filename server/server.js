require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on("error", (error) => {
  console.log("error", error);
});

db.on("once", () => {
  console.log("connected to db");
});

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.set({
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, Content-type, Accept",
    "Access-Control-Allow-Methods": "GET, POST, HEAD, OPTIONS",
  });
  next();
});

const dbRouter = require("./routes/db");

app.use("/db", dbRouter);

app.listen(3001, () => {
  console.log("server online");
});
