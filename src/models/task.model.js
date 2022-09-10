const moongose = require("mongoose");

const TaskSchema = moongose.Schema({
  todo: String,
  isDone: Boolean,
  color: String,
  addDate: String,
  finishDate: String,
  type: String,
});
module.exports = moongose.model("Task", TaskSchema);
