const mongoose = require("mongoose");

const baseSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  anotherField: {
    type: String,
    require: true,
  },
  andAnother: {
    type: String,
  },
});

module.exports = mongoose.model("base", baseSchema);
