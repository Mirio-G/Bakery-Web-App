// imports dependencies
const fs = require('fs');
const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./db.json");

const route = require("./routes/route.js");

app.use(cors());
app.use(express.json());

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use('/route', route);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});