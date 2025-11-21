import express from "express";
import auth from "../middleware/authMiddleware.js";
import Task from "../models/Task.js";

const router = express.Router();

// CREATE TASK
router.post("/", auth, async (req, res) => {
  const task = new Task({
    userId: req.user.id,
    title: req.body.title
  });
  await task.save();
  res.json({ message: "Task Added", task });
});

// GET TASKS
router.get("/", auth, async (req, res) => {
  const tasks = await Task.find({ userId: req.user.id });
  res.json(tasks);
});

// DELETE TASK
router.delete("/:id", auth, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task Deleted" });
});

export default router;
