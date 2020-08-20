const Movie = require('../models/movie-model');

createMovie = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a movie',
    })
  }

  const movie = new Movie(body)

  if (!movie) {
    return res.status(400).json({
      success: false,
      error: err
    })
  }

  movie
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: movie._id,
        message: 'Movie created!',
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Movie not created!',
      })
    })
};

updateMovie = async (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    })
  }
  Movie.update({_id: req.params.id},
    { $set: {season: "summer"}}, function(err){
      if (err){
        console.log(err);
      }
    }
  )

  Movie.findOneAndUpdate({
    _id: req.params.id
  }, body, (err, movie) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'Movie not found!',
      })
    }

    if (!movie) {
      return res
        .status(404)
        .json({
          success: false,
          error: `Movie not found`
        })
    }

    return res.status(200).json({
      success: true,
      data: movie
    })

    // movie.name = body.name;
    // movie.director = body.director;
    // movie.cast =
    // movie.releaseDate = body.releaseDate;
    // movie.plot = body.plot;
    // movie.reviews = body.reviews;
    // movie.likeCount = body.likeCount;
    // movie
    //   .save()
    //   .then(() => {
    //     return res.status(200).json({
    //       success: true,
    //       id: movie._id,
    //       message: 'Movie updated!',
    //     })
    //   })
    //   .catch(error => {
    //     return res.status(404).json({
    //       error,
    //       message: 'Movie not updated!',
    //     })
    //   })
  }).catch(err => console.log(err))
};

deleteMovie = async (req, res) => {
  await Movie.findOneAndDelete({
    _id: req.params.id
  }, (err, movie) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err
      })
    }

    if (!movie) {
      return res
        .status(404)
        .json({
          success: false,
          error: `Movie not found`
        })
    }

    return res.status(200).json({
      success: true,
      data: movie
    })
  }).catch(err => console.log(err))
};

getMovieById = async (req, res) => {
  await Movie.findOne({
    _id: req.params.id
  }, (err, movie) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err
      })
    }

    if (!movie) {
      return res
        .status(404)
        .json({
          success: false,
          error: `Movie not found`
        })
    }
    return res.status(200).json({
      success: true,
      data: movie
    })
  }).catch(err => console.log(err))
};

getMovies = async (req, res) => {
  const body = req.body
  console.log(body);

  await Movie.find(body, (err, movies) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err
      })
    }
    if (!movies.length) {
      return res
        .status(404)
        .json({
          success: false,
          error: `Movie not found`
        })
    }
    return res.status(200).json({
      success: true,
      data: movies
    })
  }).catch(err => console.log(err))
};





module.exports = {
  createMovie,
  updateMovie,
  deleteMovie,
  getMovies,
  getMovieById
};
