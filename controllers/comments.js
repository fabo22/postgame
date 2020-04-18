const Post = require('../models/post');

module.exports = {
	create,
	delete: deleteComment,
	update,
};

async function create(req, res) {
    const comment = await (await Post.findByIdAndUpdate(req.body.id, {$push: {comments: req.body}}));
    // post.comments.push(req.body);
	res.status(201).json(comment);
}

async function update(req, res) {
	const updatedComment = await Post.findOne(
		{ 'comments._id': req.params.id },
		(err, post) => {
			const comment = post.comments.id(req.params.id);
			comment.comment = req.body.content;
		}
	);
	res.status(200).json(updatedComment);
}

async function deleteComment(req, res) {
	const deletedComment = await Post.findOne(
		{ 'comments._id': req.params.id },
		(err, post) => {
			const comment = post.comments.id(req.params.id);
			comment.remove();
		}
	);
	res.status(200).json(deletedComment);
}