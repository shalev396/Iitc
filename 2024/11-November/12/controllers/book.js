import Book from "../models/book.js";

//new book
export const createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    console.log(book);

    await book.save();
    res.status(201).send(book);
  } catch (error) {
    res.status(400).send(error);
  }
};

//all Books
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    for (let i = 0; i < books.length; i++) {
      console.log(books[i].fullBookName);
    }

    res.status(200).send(books);
  } catch (error) {
    res.status(500).send(error);
  }
};

//book by ID
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    console.log(book.toText);

    if (!book) {
      return res.status(404).send({ message: "book not found" });
    }
    res.status(200).send(book);
  } catch (error) {
    res.status(500).send(error);
  }
};
//update book by id
export const updateBookById = async (req, res) => {
  try {
    const book = await Book.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).send();
  } catch (error) {
    res.status(500).send(`make sure all data and id are valid ${error}`);
  }
};
//delete book by id
export const deleteBookById = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    res.status(200).send(book);
  } catch (error) {
    res.status(500).send(`make sure all data and id are valid ${error}`);
  }
};
