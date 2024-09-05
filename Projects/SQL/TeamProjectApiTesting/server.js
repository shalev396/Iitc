const axios = require("axios");
const express = require("express");

require("dotenv").config();

const app = express();
const port = 3000;

// Route to get data
app.get("/task1", async (req, res) => {
  try {
    const prodId = 1;

    const response = await axios.get(
      `https://fakestoreapi.com/products/${prodId}`
    );
    console.log(response);
    //shows only the required values
    res.json({
      name: response.data.title,
      description: response.data.description,
      price: response.data.price,
      category: response.data.category,
      image: response.data.image,
    });
  } catch (err) {
    console.error("SQL error", err);
    res.status(500).send("Server Error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
module.exports = app;
