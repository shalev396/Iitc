const express = require("express");
const router = express.Router();
const validateFields = require("../middleware/validateFields");

const users = [{ id: 1, name: "Jane Doe" }];

router.get("/", (req, res) => {
  res.json(users);
});

router.post("/", validateFields(["name"]), (req, res) => {
  const { name } = req.body;
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
