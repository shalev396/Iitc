import axios from "axios";

export const api = axios.create({
  baseURL: "http://85.250.95.96:3000/",
  headers: {
    "Access-Control-Allow-Methods": "true",
    "Content-Type": "application/json",
  },
});
