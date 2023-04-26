const express = require("express");
const Base = require("../models/base");
const router = express.Router();

//Get all data
router.get("/", async (req, res) => {
  try {
    const data = await Base.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//Get specific data
router.get("/:id", async (req, res) => {
  // req.params.id
});

//Create one
router.post("/", async (req, res) => {
  console.log(req.body);
  const base = new Base({
    name: req.body.name,
    andAnother: req.body.andAnother,
  });

  //add into db
  try {
    const newBase = await base.save();
    res.status(201).json(newBase);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Update one
router.post("/", (req, res) => {});

//Delete one
router.delete("/:id", (req, res) => {});

module.exports = router;
