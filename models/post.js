const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    game: [Schema.Types.ObjectId],
    comments: [Schema.Types.ObjectId],
    createdBy: Schema.Types.ObjectId
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);