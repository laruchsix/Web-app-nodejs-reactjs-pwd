const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

//middleware
app.use(cors());
app.use(express.json());

app.use('/', express.static(path.join(__dirname, '../build'), {
  setHeaders: (res) => {
      res.setHeader('Service-Worker-Allowed', '/');
    },
}));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

let port = 8080;
app.listen(posrt, () => {
  console.log(`Server is running on port ${port}`);
});
