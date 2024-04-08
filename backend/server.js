require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.json(`Server is running on ${port}`)
})

app.get("/ping", (req, res) => {
    res.json("pong")
})

app.listen(port, () => {
    console.log(`🚀Server is running on port ${port}`);
  });