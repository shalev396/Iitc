const axios = require("axios");
const express = require("express");

require("dotenv").config();

const app = express();
const port = 3000;

// Route to get data
app.get("/task1/:add", async (req, res) => {
  try {
    const prodId = 1;
    const userId = 1;
    const add = req.params.add;
    const response = await axios.get(
      `https://fakestoreapi.com/products/${prodId}`
    );
    console.log(response);
    if (add === "true") {
      let headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      const data = {
        userId: userId,
        date: Date(),
        products: [{ productId: prodId, quantity: 1 }],
      };
      const responseput = await axios.put(
        `https://fakestoreapi.com/carts/${prodId}`,
        data,
        headers
      );
      res.json(responseput.data);
    } else {
      //checks if has rating
      if (response.data.rating) {
        res.json({
          //shows only the required values
          name: response.data.title,
          description: response.data.description,
          price: response.data.price,
          category: response.data.category,
          image: response.data.image,
          rating: response.data.rating,
        });
      } else {
        res.json({
          //shows only the required values
          name: response.data.title,
          description: response.data.description,
          price: response.data.price,
          category: response.data.category,
          image: response.data.image,
        });
      }
    }
  } catch (err) {
    console.error("server error", err);
    res.status(500).send("Server Error");
  }
});
app.get("/task1A", async (req, res) => {
  try {
  } catch (err) {
    console.error("server error", err);
    res.status(500).send("Server Error");
  }
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
module.exports = app;
