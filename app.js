const express = require("express");

const app = express();

app.get("/name", (req, res) => {
  res.send("Hi I am Marcel");
});

app.listen(5000, () => {
  console.log("Server is running at port 5000");
});
