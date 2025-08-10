const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;



app.get('/', (req, res) => {
  res.send('Hello, from node api server update');
});

app.post("/api/products", (req, res) => {
  res.send("Data Received");
});



mongoose.connect("mongodb+srv://sachinrv19:PvNCWOTzbIDyOi7h@cluster0.1qoem00.mongodb.net/")
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch(() => {
    console.log("connection failed");
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



