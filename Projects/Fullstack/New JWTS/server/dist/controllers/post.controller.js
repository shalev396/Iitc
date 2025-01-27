"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharePost = exports.addComment = exports.toggleLike = exports.getUserPosts = exports.getPosts = exports.createPost = void 0;
const post_model_1 = require("../models/post.model");
// @desc    Create new post
// @route   POST /api/posts
// @access  Private
const createPost = async (req, res) => {
    try {
        const { content } = req.body;
        const post = await post_model_1.Post.create({
            content,
            author: req.user._id,
        });
        const populatedPost = await post.populate("author", "username profilePic");
        res.status(201).json(populatedPost);
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
exports.createPost = createPost;
// @desc    Get all posts
// @route   GET /api/posts
// @access  Private
const getPosts = async (req, res) => {
    try {
        const posts = await post_model_1.Post.find({})
            .populate("author", "username profilePic")
            .populate("comments.author", "username profilePic")
            .sort({ createdAt: -1 });
        res.json(posts);
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
exports.getPosts = getPosts;
// @desc    Get user posts
// @route   GET /api/posts/user/:userId
// @access  Private
const getUserPosts = async (req, res) => {
    try {
        const posts = await post_model_1.Post.find({ author: req.params.userId })
            .populate("author", "username profilePic")
            .populate("comments.author", "username profilePic")
            .sort({ createdAt: -1 });
        res.json(posts);
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
exports.getUserPosts = getUserPosts;
// @desc    Like/Unlike post
// @route   PUT /api/posts/:id/like
// @access  Private
const toggleLike = async (req, res) => {
    try {
        const post = await post_model_1.Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        const likeIndex = post.likes.indexOf(req.user._id);
        if (likeIndex === -1) {
            post.likes.push(req.user._id);
        }
        else {
            post.likes.splice(likeIndex, 1);
        }
        await post.save();
        res.json({ likes: post.likes });
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
exports.toggleLike = toggleLike;
// @desc    Add comment to post
// @route   POST /api/posts/:id/comments
// @access  Private
const addComment = async (req, res) => {
    try {
        const { content } = req.body;
        const post = await post_model_1.Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        post.comments.push({
            content,
            author: req.user._id,
        });
        await post.save();
        const updatedPost = await post_model_1.Post.findById(req.params.id)
            .populate("author", "username profilePic")
            .populate("comments.author", "username profilePic");
        res.json(updatedPost);
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
exports.addComment = addComment;
// @desc    Share post
// @route   PUT /api/posts/:id/share
// @access  Private
const sharePost = async (req, res) => {
    try {
        const post = await post_model_1.Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        post.shares += 1;
        await post.save();
        res.json({ shares: post.shares });
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
exports.sharePost = sharePost;
