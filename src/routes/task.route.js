module.exports = (app) => {
  const tasks = require("../controllers/task.controller");

  app.post("/tasks", tasks.create);

  app.get("/tasks", tasks.findAll);

  app.patch("/tasks/:id", tasks.update);

  app.delete("/tasks/:id", tasks.delete);
};
