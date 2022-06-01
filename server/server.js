const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

//middleware
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../build")));

app.use('/', express.static('../build', {
  setHeaders: (res) => {
      res.setHeader('Service-Worker-Allowed', '/');
    },
}));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});


app.listen(8080, () => {
  console.log("Server is running on port 5000");
});
