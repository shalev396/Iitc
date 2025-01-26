import { Schema, model, Document, Types } from "mongoose";

export interface IPost extends Document {
  content: string;
  author: Types.ObjectId;
  likes: Types.ObjectId[];
  comments: {
    content: string;
    author: Types.ObjectId;
    likes: Types.ObjectId[];
    createdAt: Date;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
      trim: true,
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
  },
  {
    timestamps: true,
  }
);

const postSchema = new Schema<IPost>(
  {
    content: {
      type: String,
      required: true,
      trim: true,
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
  },
  {
    timestamps: true,
  }
);

export const Post = model<IPost>("Post", postSchema);
