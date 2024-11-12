import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from "../controllers/user.js";

const router = express.Router();

//new user
router.post("/", createUser);

//all users
router.get("/", getAllUsers);

//user by id
router.get("/:id", getUserById);

//update user by id
router.put("/:id", updateUserById);

//delete user by id
router.delete("/:id", deleteUserById);

export default router;
