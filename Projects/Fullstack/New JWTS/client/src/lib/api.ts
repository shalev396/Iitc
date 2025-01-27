import axios from "axios";

const API_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to requests if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth API
export const register = async (userData: {
  username: string;
  email: string;
  password: string;
}) => {
  const response = await api.post("/users/register", userData);
  return response.data;
};

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await api.post("/users/login", credentials);
  return response.data;
};

export const updateProfile = async (updates: {
  username?: string;
  email?: string;
  password?: string;
  profilePic?: string;
}) => {
  const response = await api.put("/users/profile", updates);
  return response.data;
};

// Posts API
export const createPost = async (content: string) => {
  const response = await api.post("/posts", { content });
  return response.data;
};

export const getPosts = async () => {
  const response = await api.get("/posts");
  return response.data;
};

export const getUserPosts = async (userId: string) => {
  const response = await api.get(`/posts/user/${userId}`);
  return response.data;
};

export const likePost = async (postId: string) => {
  const response = await api.put(`/posts/${postId}/like`);
  return response.data;
};

export const addComment = async (postId: string, content: string) => {
  const response = await api.post(`/posts/${postId}/comments`, { content });
  return response.data;
};

export const sharePost = async (postId: string) => {
  const response = await api.put(`/posts/${postId}/share`);
  return response.data;
};
