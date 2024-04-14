require("../../connection");
const TaskModel = require("../models/task.model");
const findAll = async (req, res) => {
  try {
    const tasks = await TaskModel.find();

    return res.status(200).json({ tasks });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const create = async (req, res) => {
  try {
    const new_task = new TaskModel(req.body);
    const task = await new_task.save();

    return res.status(201).json({ task });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updated = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: id };

  try {
    const task = await TaskModel.findOneAndUpdate(filter, req.body, {
      new: true,
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json({ task });
  } catch (error) {
    console.error("Error updating task:", error.message);
    return res.status(500).json({ message: error.message });
  }
};

const findOne = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: id };

  try {
    const task = await TaskModel.findOne(filter);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json({ task });
  } catch (error) {
    console.error("Error updating task:", error.message);
    return res.status(500).json({ message: error.message });
  }
};

const deleteOne = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: id };
  try {
    const task = await TaskModel.deleteOne(filter);
    if (task.deleteCount === 0) {
      return res.status(404).json({ message: "Task was not deleted" });
    }

    return res.status(200).json({ message: "ok" });
  } catch (error) {
    console.error("Error updating task:", error.message);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { findAll, create, updated, findOne, deleteOne };
