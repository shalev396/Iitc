import { Request, Response } from "express";
import { Post } from "../models/post.model";
import { Types } from "mongoose";

// @desc    Create new post
// @route   POST /api/posts
// @access  Private
export const createPost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { content } = req.body;
    const post = await Post.create({
      content,
      author: req.user._id,
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: "Error creating post" });
  }
};

// @desc    Get all posts
// @route   GET /api/posts
// @access  Private
export const getPosts = async (req: Request, res: Response): Promise<void> => {
  try {
    const posts = await Post.find()
      .populate("author", "username email")
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(400).json({ message: "Error fetching posts" });
  }
};

// @desc    Get user posts
// @route   GET /api/posts/user/:userId
// @access  Private
export const getUserPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find({ author: req.params.userId })
      .populate("author", "username profilePic")
      .populate("comments.author", "username profilePic")
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// @desc    Like/Unlike post
// @route   PUT /api/posts/:id/like
// @access  Private
export const toggleLike = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    const userId = req.user._id;
    const userIdStr = userId.toString();
    const likeIndex = post.likes.findIndex((id) => id.toString() === userIdStr);

    if (likeIndex === -1) {
      post.likes.push(userId);
    } else {
      post.likes.splice(likeIndex, 1);
    }

    await post.save();
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: "Error updating post" });
  }
};

// @desc    Add comment to post
// @route   POST /api/posts/:id/comments
// @access  Private
export const addComment = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    const comment = {
      content: req.body.content,
      author: req.user._id,
      createdAt: new Date(),
    };

    post.comments.push(comment);
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: "Error adding comment" });
  }
};

// @desc    Share post
// @route   PUT /api/posts/:id/share
// @access  Private
export const sharePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    post.shares += 1;
    await post.save();

    res.json({ shares: post.shares });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};
