import mongoose, { Document, Types } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
  _id: Types.ObjectId;
  username: string;
  email: string;
  password: string;
  profilePic?: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profilePic: {
      type: String,
      default: "https://via.placeholder.com/150",
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();

    // Hash password with secret first
    const saltedPassword = process.env.PASSWORD_SECRET + this.password;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(saltedPassword, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  try {
    // Salt candidate password in same order as registration
    const saltedPassword = process.env.PASSWORD_SECRET + candidatePassword;

    // Compare with stored hash
    return await bcrypt.compare(saltedPassword, this.password);
  } catch (error) {
    console.error("Password comparison error:", error);
    return false;
  }
};

export const User = mongoose.model<IUser>("User", userSchema);
