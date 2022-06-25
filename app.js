const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
app.use(express.json());

app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/book", (req, res) => {
  console.log("Booking page");
  res.sendFile(path.join(__dirname, "./public/book.html"));
});
app.get("/success", (req, res) => {
  console.log("Success");
  res.send("")
})
// app.post("/book", async (req, res) => {
//   // const data = req.body;
//   const data = {
//     name: `name`,
//     class: `45`,
//     Course: `Btech`,
//   };
//   await User.add({ data });
//   console.log(data);
//   res.send({ msg: "User Added" });
// });

app.get("/download", (req, res) => {
  console.log("Download page");
  res.sendFile(path.join(__dirname, "./public/download.html"));
});
app.listen(port, () => {
  console.log("http://localhost:3000/");
  console.log(`Example app listening on port ${port}`);
});
