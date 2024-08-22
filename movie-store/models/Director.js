const mongoose = require('mongoose');

const DirectorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const Director = mongoose.model('Director', DirectorSchema);

module.exports = Director;
