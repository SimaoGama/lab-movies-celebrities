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
    const movie = await Movie.findById(req.params.id).populate('cast');
    res.render('movies/movie-details', movie);
  } catch (e) {
    console.log(e);
  }
});

router.get('/movies/:id/edit', async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  const celebrity = await Celebrity.find();
  res.render('movies/edit-movie', { movie, celebrity });
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

router.post('/movies/:id/delete', async (req, res) => {
  try {
    await Movie.findByIdAndRemove(req.params.id);
    res.redirect('/movies');
  } catch (e) {
    console.log(e);
  }
});

router.post('/movies/:id/edit', (req, res) => {});

module.exports = router;
