import axios, { InternalAxiosRequestConfig } from "axios";

const API_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
});

// Add token to requests if it exists
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const register = async (
  username: string,
  email: string,
  password: string
) => {
  const response = await api.post("/auth/register", {
    username,
    email,
    password,
  });
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await api.post("/auth/login", { email, password });
  return response.data;
};

export const updateProfile = async (data: {
  username?: string;
  email?: string;
  bio?: string;
  avatar?: string;
}) => {
  const response = await api.patch("/auth/profile", data);
  return response.data;
};

export const getProfile = async () => {
  const response = await api.get("/auth/profile");
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
  const response = await api.post(`/posts/${postId}/like`);
  return response.data;
};

export const addComment = async (postId: string, content: string) => {
  const response = await api.post(`/posts/${postId}/comments`, { content });
  return response.data;
};

export const likeComment = async (postId: string, commentId: string) => {
  const response = await api.post(
    `/posts/${postId}/comments/${commentId}/like`
  );
  return response.data;
};

export const deletePost = async (postId: string) => {
  const response = await api.delete(`/posts/${postId}`);
  return response.data;
};
