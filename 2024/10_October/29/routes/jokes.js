const express = require("express");
const router = express.Router();
const validateFields = require("../middleware/validateFields");

const jokes = [
  { id: 1, content: "Why did the chicken cross the road?", author: "John Doe" },
];

router.get("/", (req, res) => {
  res.json(jokes);
});

router.get("/:id", (req, res, next) => {
  const joke = jokes.find((j) => j.id === parseInt(req.params.id));
  if (!joke) {
    return next({ status: 404, message: "Joke not found" });
  }
  res.json(joke);
});

router.post("/", validateFields(["content", "author"]), (req, res) => {
  const { content, author } = req.body;
  const newJoke = { id: jokes.length + 1, content, author };
  jokes.push(newJoke);
  res.status(201).json(newJoke);
});

module.exports = router;
