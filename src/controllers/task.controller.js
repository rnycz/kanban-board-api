const Task = require("../models/task.model");

exports.create = (req, res) => {
  if (!req.body.todo && !req.body.color) {
    return res.status(400).send({ message: "Enter necessary values" });
  }
  const task = new Task({
    todo: req.body.todo,
    isDone: req.body.isDone,
    color: req.body.color,
    addDate: req.body.addDate,
    finishDate: req.body.finishDate,
    type: req.body.type,
  });
  task
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({ message: error.message || "Some error occurred" });
    });
};

exports.findAll = (req, res) => {
  Task.find()
    .then((tasks) => {
      res.send(tasks);
    })
    .catch((error) => {
      res.status(500).send({ message: error.message || "Some error occurred" });
    });
};

exports.update = (req, res) => {
  Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((task) => {
      if (!task) {
        return res
          .status(404)
          .send({ message: `Not found task with id ${req.params.id}` });
      }
      res.send(task);
    })
    .catch((error) => {
      if (error.kind === "ObjectId") {
        return res
          .status(404)
          .send({ message: `Not found task with id ${req.params.id}` });
      }
      return res
        .status(500)
        .send({ message: `Error updating task with id ${req.params.id}` });
    });
};

exports.delete = (req, res) => {
  Task.findByIdAndRemove(req.params.id)
    .then((task) => {
      if (!task) {
        return res
          .status(404)
          .send({ message: `Not found task with id ${req.params.id}` });
      }
      res.send({ message: "Task deleted" });
    })
    .catch((error) => {
      if (error.kind === "ObjectId" || error.name === "NotFound") {
        return res
          .status(404)
          .send({ message: `Not found task with id ${req.params.id}` });
      }
      return res
        .status(500)
        .send({ message: `Could not delete task with id ${req.params.id}` });
    });
};
