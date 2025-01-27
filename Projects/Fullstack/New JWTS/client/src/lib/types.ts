export interface User {
  _id: string;
  username: string;
  email: string;
  profilePic?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  _id: string;
  content: string;
  author: User;
  createdAt: string;
  updatedAt: string;
}

export interface Post {
  _id: string;
  content: string;
  author: User;
  likes: string[]; // Array of user IDs
  comments: Comment[];
  shares: number;
  createdAt: string;
  updatedAt: string;
}
