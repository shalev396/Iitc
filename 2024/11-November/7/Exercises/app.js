import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./model/user.js";
import morgan from "morgan";
dotenv.config();
const app = express();
const PORT = 3006; // 3000-3005 are in use on my desktop
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json());
app.use(morgan("tiny"));

app.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get("/:id", async (req, res) => {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Joke not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.json(user);
});
app.get("/:name", async (req, res) => {
  let user;
  try {
    user = await User.find(req.params.name);
    if (user == null) {
      return res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.json(user);
});
app.post("/", async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    });
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
app.put("/:id", async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name;
  }
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  if (req.body.age != null) {
    res.user.age = req.body.age;
  }
  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete("/:id", async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "Deleted Joke" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
