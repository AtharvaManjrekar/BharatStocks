import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",   // your backend URL
});

// Attach token automatically to every request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// ------------------ AUTH ------------------
export const registerUser = (data) => API.post("/api/auth/signup", data);
export const loginUser = (data) => API.post("/api/auth/login", data);

// ------------------ TASKS ------------------
export const fetchTasks = () => API.get("/api/tasks");
export const addTask = (title) => API.post("/api/tasks", { title });
export const deleteTask = (id) => API.delete(`/api/tasks/${id}`);
