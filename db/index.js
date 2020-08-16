const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://venessaliu:lst1031DB@cluster0.3nljc.mongodb.net/movieDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set("useCreateIndex", true);

const db = mongoose.connection;

module.exports = db;
