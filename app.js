const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
app.use(express.json());

app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/bookAdmin", (req, res) => {
  console.log("admin booking page");
  res.sendFile(path.join(__dirname, "./public/bookAdmin.html"));
});

app.get("/download", async (req, res) => {
  res.sendFile(path.join(__dirname, "./public/download.html"));
});

app.get("/bookUser", (req, res) => {
  console.log("user booking page");
  res.sendFile(path.join(__dirname, "./public/bookUser.html"));
});

app.listen(port, () => {
  console.log("http://localhost:3000/");
  console.log(`Example app listening on port ${port}`);
});
