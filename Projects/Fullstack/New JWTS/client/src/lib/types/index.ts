export interface User {
  id: string;
  username: string;
  email: string;
  profilePic?: string;
  createdAt: string;
}

export interface Post {
  id: string;
  content: string;
  author: User;
  likes: number;
  comments: Comment[];
  shares: number;
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}
