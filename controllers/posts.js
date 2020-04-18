const Post = require('../models/post');

module.exports = {
    index,
    create,
    show,
    delete: deletePost,
};

async function index(req, res) {
	const posts = await Post.find({}).populate('postUser').populate('comments.commentUser');
    res.status(200).json(posts);
}

async function create(req, res) {
	const post = await Post.create(req.body);
	res.status(201).json(post);
}

async function show(req, res) {
	const post = await Post.findById(req.params.id);
	res.status(200).json(post);
}

async function deletePost(req, res) {
	const deletedPost = await Post.findByIdAndRemove(req.params.id);
	res.status(200).json(deletedPost);
}