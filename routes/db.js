const express = require("express");
const router = express.Router();

//Get all data

router.get("/", (req, res) => {
  res.send("hello world");
});
//Get specific data
router.get("/:id", (req, res) => {
  // req.params.id
});

//Create one
router.post("/", (req, res) => {});

//Update one
router.post("/", (req, res) => {});

//Delete one
router.delete("/:id", (req, res) => {});

module.exports = router;
