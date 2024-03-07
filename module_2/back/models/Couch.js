const mongoose = require('mongoose');

const CouchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  number_phone: {
    type: Number,
    required: true,
  },
  gym_medals: {
    type: Number,
    required: true
  }
});

module.exports = Couch = mongoose.model('couch', CouchSchema);