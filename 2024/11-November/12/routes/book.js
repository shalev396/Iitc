import express from "express";
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
} from "../controllers/book.js";

const router = express.Router();

//new book
router.post("/", createBook);

//all books
router.get("/", getAllBooks);

//book by id
router.get("/:id", getBookById);

//update book by id
router.put("/:id", updateBookById);

//delete book by id
router.delete("/:id", deleteBookById);

export default router;
