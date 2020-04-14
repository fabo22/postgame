const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  createdBy: Schema.Types.ObjectId,
}, {
  timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema);