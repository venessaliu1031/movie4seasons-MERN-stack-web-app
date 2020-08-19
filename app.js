const express = require("express");
const bodyParser = require("body-parser");
const parallax = require("parallax-js");
const cors = require("cors");
const path = require('path');

require('dotenv').config();
const PORT = process.env.PORT || 3000;

const db = require("./db");


const movieRouter = require('./routes/movie-router');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))



app.use('/api', movieRouter);

// if (process.env.NODE_ENV === 'production') {
app.use(express.static(path.join(__dirname, "client", "build")))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
// }



app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}.`);
});
