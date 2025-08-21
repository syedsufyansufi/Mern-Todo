import express from "express";
import Task from "../models/Task.js"

const router = express.Router();

//get

router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

//post

router.post("/", async (req, res) => {
  const newTask = new Task({ text: req.body.text });
  await newTask.save();
  res.json(newTask);
});

//delete

router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task Deleted" });
});

export default router;
