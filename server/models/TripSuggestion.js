const mongoose = require("mongoose");

const TripSuggestionSchema = new mongoose.Schema({
  city: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  votes: {
    type: [],
  },
});

module.exports = mongoose.model("TripSuggestion", TripSuggestionSchema);
