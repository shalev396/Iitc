import express, { urlencoded } from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose, { connect } from "mongoose";
const PORT = 3000;
const app = express();

const uri =
  "mongodb+srv://shalev396:opaDZu1F0jIYpa8h@cluster0.2cee7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(uri)
  .then(console.log("Connected"))
  .catch((err) => console.error(err));

app.get("/", (_req, res) => {
  res.send({ Message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`server is running on: http://localhost:${PORT}`);
});
