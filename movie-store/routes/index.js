const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// Home Page
router.get('/', (req, res) => {
  Movie.find()
    .populate('genre')
    .populate('director')
    .populate('actors')
    .then(movies => res.render('index', { movies, user: req.user }))
    .catch(err => console.log(err));
});

module.exports = router;
