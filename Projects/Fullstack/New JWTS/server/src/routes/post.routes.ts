import express from "express";
import {
  createPost,
  getPosts,
  toggleLike,
  addComment,
} from "../controllers/post.controller";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

// Protected routes
router.use(protect);

router.post("/", createPost);
router.get("/", getPosts);
router.put("/:id/like", toggleLike);
router.post("/:id/comments", addComment);

export default router;
