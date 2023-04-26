// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router();
const Celebrity = require('../models/Celebrity.model');

// all your routes here
//GET
router.get('/celebrities/create', async (req, res) => {
  const celebrity = await Celebrity.find();
  res.render('celebrities/new-celebrity', { celebrity });
});

router.get('/celebrities', async (req, res) => {
  try {
    const celebrity = await Celebrity.find();
    res.render('celebrities/celebrities', { celebrity });
  } catch (e) {
    console.log(e);
  }
});

//POST
router.post('/celebrities/create', async (req, res) => {
  try {
    const { name, occupation, catchPhrase } = req.body;
    await Celebrity.create({ name, occupation, catchPhrase });

    res.redirect('/celebrities');
  } catch (e) {
    console.log(e);
    res.redirect('/celebrities/create');
  }
});

module.exports = router;
