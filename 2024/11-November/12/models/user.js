import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});
userSchema.virtual(`fullName`).get(function () {
  return `${this.firstName} ${this.lastName}`;
});

userSchema.virtual(`toText`).get(function () {
  return `${this.firstName}:${this.phone}:${this.email}`;
});
//middlewares
userSchema.pre("save", function () {
  if (!this.createdAt) {
    this.createdAt = Date.now();
  }
});
userSchema.post("save", function () {
  console.log(`user ${this.fullName} has created and saved successfully`);
});
const User = mongoose.model("User", userSchema);

export default User;
