// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router();
const Movie = require('../models/Movies.model');
const Celebrity = require('../models/Celebrity.model');

// all your routes here

//GET
router.get('/movies/create', async (req, res) => {
  try {
    const celebrities = await Celebrity.find();
    res.render('movies/new-movie', { celebrities });
  } catch (e) {
    console.log(e);
  }
});

router.get('/movies', async (req, res) => {
  try {
    const movie = await Movie.find().populate('cast');
    res.render('movies/movies', { movie });
  } catch (e) {
    console.log(e);
  }
});

router.get('/movies/:id', async (req, res) => {
  try {
    const movies = await Movie.findById(req.params.id).populate('celebrity');
    res.render('movies/movie-details', movies);
  } catch (e) {
    console.log(e);
  }
});

//POST

router.post('/movies/create', async (req, res) => {
  try {
    const { title, genre, plot, cast } = req.body;
    await Movie.create({ title, genre, plot, cast });
    res.redirect('/movies');
  } catch (e) {
    console.log(e);
    res.redirect('/movies/create');
  }
});

module.exports = router;
