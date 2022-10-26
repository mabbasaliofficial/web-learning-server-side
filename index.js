const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 5000;

const categories = require("./Data/course.json");
const courses = require("./Data/details.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const course = courses.find((c) => c.id == id);
  res.send(course);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
