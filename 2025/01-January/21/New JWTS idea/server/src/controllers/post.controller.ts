import { Request, Response } from "express";
import { Post } from "../models/Post";
import { Types } from "mongoose";

export const createPost = async (req: Request, res: Response) => {
  try {
    const post = new Post({
      ...req.body,
      author: req.user._id,
    });

    await post.save();
    await post.populate("author", "username");
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: "Error creating post" });
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate("author", "username")
      .populate("comments.author", "username");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching posts" });
  }
};

export const getUserPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find({ author: req.params.userId })
      .sort({ createdAt: -1 })
      .populate("author", "username")
      .populate("comments.author", "username");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching user posts" });
  }
};

export const likePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const likeIndex = post.likes.indexOf(req.user._id);
    if (likeIndex === -1) {
      post.likes.push(req.user._id);
    } else {
      post.likes.splice(likeIndex, 1);
    }

    await post.save();
    res.json(post);
  } catch (error) {
    res.status(400).json({ error: "Error liking post" });
  }
};

export const addComment = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const newComment = {
      content: req.body.content,
      author: new Types.ObjectId(req.user._id),
      likes: [] as Types.ObjectId[],
      createdAt: new Date(),
    };

    post.comments.push(newComment);
    await post.save();
    await post.populate("comments.author", "username");
    res.json(post);
  } catch (error) {
    res.status(400).json({ error: "Error adding comment" });
  }
};

export const likeComment = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const comment = post.comments.find(
      (c) => c._id.toString() === req.params.commentId
    );
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    const likeIndex = comment.likes.findIndex(
      (id) => id.toString() === req.user._id.toString()
    );
    if (likeIndex === -1) {
      comment.likes.push(new Types.ObjectId(req.user._id));
    } else {
      comment.likes.splice(likeIndex, 1);
    }

    await post.save();
    res.json(post);
  } catch (error) {
    res.status(400).json({ error: "Error liking comment" });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findOneAndDelete({
      _id: req.params.id,
      author: req.user._id,
    });

    if (!post) {
      return res.status(404).json({ error: "Post not found or unauthorized" });
    }

    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting post" });
  }
};
