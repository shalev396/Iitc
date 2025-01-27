import express from "express";
import {
  registerUser,
  loginUser,
  getProfile,
} from "../controllers/user.controller";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected routes
router.get("/profile", protect, getProfile);

export default router;
