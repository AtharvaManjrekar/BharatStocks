import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import taskRoutes from "./src/routes/taskRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";

const app = express();

// MIDDLEWARE FIRST
app.use(express.json());
app.use(cors());

// AUTH ROUTES FIRST (LOGIN, REGISTER)
app.use("/api/auth", authRoutes);

// AFTER AUTH — PROTECTED ROUTES
app.use("/api/tasks", taskRoutes);

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/BharatStocks")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

app.get("/", (req, res) => {
  res.send("Backend running...");
});

app.listen(5000, () => console.log("Server running on port 5000"));
