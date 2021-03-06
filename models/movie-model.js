const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: String,
  director: String,
  releaseDate: Number,
  cast: String,
  plot: String,
  reviews: String,
  likeCount: Number,
  genre: String,
  season: String,
  verification: Boolean
});



module.exports = mongoose.model("Movie", movieSchema);
