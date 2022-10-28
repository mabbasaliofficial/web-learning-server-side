const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;
app.use(cors());

const courses = require("./Data/course.json");
const details = require("./Data/details.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/allCourses", (req, res) => {
  res.send(details);
});

app.get("/allCourses/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = details.find((c) => c._id === id);
  res.send(selectedCourse);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "00") {
    res.send(details);
  } else {
    const selectedCategory = details.filter((c) => c.course_id === id);
    res.send(selectedCategory);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
