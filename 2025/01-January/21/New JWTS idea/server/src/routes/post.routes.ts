import { Router } from "express";
import {
  createPost,
  getPosts,
  getUserPosts,
  likePost,
  addComment,
  likeComment,
  deletePost,
} from "../controllers/post.controller";
import { auth } from "../middleware/auth";

const router = Router();

// All routes are protected
router.use(auth);

// Post routes
router.post("/", createPost);
router.get("/", getPosts);
router.get("/user/:userId", getUserPosts);
router.post("/:id/like", likePost);
router.post("/:id/comments", addComment);
router.post("/:postId/comments/:commentId/like", likeComment);
router.delete("/:id", deletePost);

export default router;
