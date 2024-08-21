const express = require("express");
const app = express();
const port = 3000;
const contact = { email: "shalev396@gmail.com", phone: "0544809493" };
const { getProducts, getProductById } = require("./products");

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
app.get("/", (req, res) => {
  res.send("Welcome to my basic Express server!");
});
app.get("/about", (req, res) => {
  res.send("This server was created by Shalev");
});

app.get("/contact", (req, res) => {
  res.json(contact);
});

app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  res.json(getProductById(productId));
});
