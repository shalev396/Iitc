import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Access-Control-Allow-Methods": "true",
    "Content-Type": "application/json",
  },
});
