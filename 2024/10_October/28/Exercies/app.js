const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3006; //3000-3005 are in use
app.use(express.json());
const loadData = (file) => JSON.parse(fs.readFileSync(file, "utf-8"));
const saveData = (file, data) =>
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
let jokes = loadData("./db/jokes.json");
let users = loadData("./db/users.json");
let products = loadData("./db/products.json");
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
//1.2.1
app.get("/api/jokes/random", (req, res) => res.json(getRandomItem(jokes)));
app.get("/api/users/random", (req, res) => res.json(getRandomItem(users)));
app.get("/api/products/random", (req, res) =>
  res.json(getRandomItem(products))
);

//1.2.2
app.post("/api/jokes", (req, res) => {
  const newJoke = { id: jokes.length + 1, joke: req.body.joke };
  jokes.push(newJoke);
  saveData("./db/jokes.json", jokes);
  res.status(201).json(newJoke);
});

app.post("/api/users", (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  saveData("./db/users.json", users);
  res.status(201).json(newUser);
});

app.post("/api/products", (req, res) => {
  const newProduct = { id: products.length + 1, ...req.body };
  products.push(newProduct);
  saveData("./db/products.json", products);
  res.status(201).json(newProduct);
});

//2.1
app.get("/jokes/:id", (req, res) => {
  const joke = jokes.find((j) => j.id === parseInt(req.params.id));
  joke ? res.json(joke) : res.status(404).json({ message: "Joke not found" });
});

app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  user ? res.json(user) : res.status(404).json({ message: "User not found" });
});

app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  product
    ? res.json(product)
    : res.status(404).json({ message: "Product not found" });
});

app.patch("/jokes/:id", (req, res) => {
  const joke = jokes.find((j) => j.id === parseInt(req.params.id));
  if (joke) {
    Object.assign(joke, req.body);
    saveData("./db/jokes.json", jokes);
    res.json(joke);
  } else {
    res.status(404).json({ message: "Joke not found" });
  }
});

app.patch("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (user) {
    Object.assign(user, req.body);
    saveData("./db/users.json", users);
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.patch("/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (product) {
    Object.assign(product, req.body);
    saveData("./db/products.json", products);
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.delete("/jokes/:id", (req, res) => {
  const index = jokes.findIndex((j) => j.id === parseInt(req.params.id));
  if (index !== -1) {
    jokes.splice(index, 1);
    saveData("./db/jokes.json", jokes);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Joke not found" });
  }
});

app.delete("/users/:id", (req, res) => {
  const index = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (index !== -1) {
    users.splice(index, 1);
    saveData("./db/users.json", users);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.delete("/products/:id", (req, res) => {
  const index = products.findIndex((p) => p.id === parseInt(req.params.id));
  if (index !== -1) {
    products.splice(index, 1);
    saveData("./db/products.json", products);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
