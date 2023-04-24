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

const dbRouter = require("./routes/db");

app.use("/db", dbRouter);

app.listen(3000, () => {
  console.log("server online");
});
