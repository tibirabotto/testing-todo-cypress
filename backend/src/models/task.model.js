const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: String,
});

const TaskModel = mongoose.model("Tasks", TaskSchema);

module.exports = TaskModel;
