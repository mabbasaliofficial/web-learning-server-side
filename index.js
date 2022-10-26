const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const port = process.env.PORT || 5000;

const courses = require("./Data/course.json");
const details = require("./Data/details.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const course = details.find((c) => c.id == id);
  if (!course) {
    res.send('course nei')
  }
  res.send(course);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;