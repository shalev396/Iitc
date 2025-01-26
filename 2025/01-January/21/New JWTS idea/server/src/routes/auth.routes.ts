import { Router } from "express";
import {
  register,
  login,
  getProfile,
  updateProfile,
} from "../controllers/auth.controller";
import { auth } from "../middleware/auth";

const router = Router();

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected routes
router.get("/profile", auth, getProfile);
router.patch("/profile", auth, updateProfile);

export default router;
