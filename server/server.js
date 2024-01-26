const fs = require('fs');
const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./db.json");

app.use(cors());
app.use(express.json());

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.get('/test', (req, res) => {
  let file = fs.readFileSync('./db.json', 'utf8');
  res.json(JSON.parse(file));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});