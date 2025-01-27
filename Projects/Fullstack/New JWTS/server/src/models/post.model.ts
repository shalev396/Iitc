import mongoose, { Schema, Document, Types } from "mongoose";
import { IUser } from "./user.model";

export interface IComment {
  content: string;
  author: Types.ObjectId;
  createdAt: Date;
  updatedAt?: Date;
}

export interface IPost extends Document {
  content: string;
  author: Types.ObjectId;
  likes: Types.ObjectId[];
  comments: IComment[];
  shares: number;
  createdAt: Date;
  updatedAt: Date;
}

const commentSchema = new Schema<IComment>({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const postSchema = new Schema<IPost>(
  {
    content: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [commentSchema],
    shares: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Post = mongoose.model<IPost>("Post", postSchema);
