const express = require("express");
const router = express.Router();
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

router.route("/").get(getPosts).post(createPost);
router.route("/:id").get(getPost).put(updatePost).delete(deletePost);
router.get("/", async (req, res) => {
  const { page = 1, limit = 6, search = "" } = req.query;
  // Your pagination and search logic here
  // Return response in format: { posts: [...], totalPages: number }
});

module.exports = router;
