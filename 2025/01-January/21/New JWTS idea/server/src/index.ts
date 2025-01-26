import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import postRoutes from "./routes/post.routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const mongoUri =
  process.env.MONGODB_URI || "mongodb://localhost:27017/social-network";

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

// Connect to MongoDB
mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
