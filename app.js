const PORT = 8000;

//to import express
const express = require("express");

const app = express();
//imports
const data = require("./data");
//listening to and starting the server
app.listen(PORT, () => {
  console.log(`listening ... to port ${PORT}`);
});
//get methods
app.get("/", (req, res) => {
  res.status(200).json({
    name: "Turki",
    age: 25,
    height: 174,
  });
});

app.get("/api/products", (req, res) => {
  res.status(201).json({ data });
});
