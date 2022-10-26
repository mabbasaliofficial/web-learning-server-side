const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 5000;

const categories = require('./Data/course.json');

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/categories", (req, res) => {
    res.send(categories);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
