import { Post, User } from "./types";

export const dummyUser: User = {
  id: "1",
  username: "demo_user",
  email: "demo@example.com",
  profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=demo",
  createdAt: new Date().toISOString(),
};

// Demo credentials:
// Email: demo@example.com
// Password: Demo123!

export const dummyPosts: Post[] = [
  {
    id: "1",
    content: "Just started learning React with Vite and ShadcnUI! 🚀",
    author: dummyUser,
    likes: 15,
    comments: [
      {
        id: "1",
        content: "Great choice! Keep it up! 👍",
        author: {
          id: "2",
          username: "tech_enthusiast",
          email: "tech@example.com",
          profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=tech",
          createdAt: new Date().toISOString(),
        },
        createdAt: new Date().toISOString(),
      },
    ],
    shares: 3,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    content:
      "Building my first social media app. What features would you like to see? 🤔",
    author: dummyUser,
    likes: 32,
    comments: [],
    shares: 7,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
