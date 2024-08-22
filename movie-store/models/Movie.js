const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genre'
  },
  director: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Director'
  },
  actors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Actor'
  }],
  releaseDate: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
