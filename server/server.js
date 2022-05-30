const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

//middleware
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});


app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
