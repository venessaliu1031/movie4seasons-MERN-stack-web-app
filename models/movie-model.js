const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: String,
  director: String,
  releaseDate: Number,
  cast: String,
  plot: String,
  reviews: String,
  likeCount: Number
});

module.exports = mongoose.model("Movie", movieSchema);
