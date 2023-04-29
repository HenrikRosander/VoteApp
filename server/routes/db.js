const express = require("express");
const TripSuggestion = require("../models/TripSuggestion");
const router = express.Router();

//Get all data
router.get("/", async (req, res) => {
  try {
    const data = await TripSuggestion.find();
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
  if (req.query.city) {
    const tripSuggestion = new TripSuggestion({
      city: req.query.city,
      image: req.query.image,
      country: req.query.country,
      votes: req.query?.votes,
    });

    //add into db
    try {
      const newSuggestion = await tripSuggestion.save();
      res.status(201).json(newSuggestion);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } else {
    res.status(400).json({ message: "Please provide data" });
  }
});

//Update one
router.post("/", (req, res) => {});

//Delete one
router.delete("/:id", (req, res) => {});

module.exports = router;
