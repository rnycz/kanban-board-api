const express = require("express");
const bodyParser = require("body-parser");
const dbConfig = require("./src/config/db.config");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.Promise = global.Promise;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database.", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to REST API - Kanban Board." });
});

require("./src/routes/task.route")(app);

app.listen(3001, () => {
  console.log("Server port - 3001");
});
