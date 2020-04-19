const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    commentUser: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
  }, {
    timestamps: true
  });
  

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    userCount: {
        type: Number,
        required: true
    },
    game: {
        type: String,
        required: true
    },
    comments: [commentSchema],
    postUser: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);