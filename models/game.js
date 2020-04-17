const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = Schema({
  name: String,
  image: String,
  releaseDate: String,
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Game', gameSchema);