import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  pageNumber: { type: Number, required: true, min: 0 },
  publishDate: { type: Date, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  createdAt: { type: Date, required: true, default: Date.now() },
});
bookSchema.virtual(`fullBookName`).get(function () {
  return `${this.name} ${this.author}`;
});

bookSchema.virtual(`toText`).get(function () {
  return `${this.name}:${this.author}:${this.pageNumber}:${this.publishDate}:${this.rating}:${this.createdAt}`;
});
//middlewares
bookSchema.pre("save", function () {
  if (!this.createdAt) {
    this.createdAt = Date.now();
  }
});
bookSchema.post("save", function () {
  console.log(`user ${this.name} has created and saved successfully`);
});
const Book = mongoose.model("Book", bookSchema);

export default Book;
