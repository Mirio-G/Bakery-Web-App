// To connect with your mongoDB database
//ATLAS_URI=mongodb+srv://tbui931958:testing1234@cluster0.xlr4bkb.mongodb.net/?retryWrites=true&w=majority

// TODO: Template for expressjs and mongodb

// const express = require("express");
// const app = express();
// const cors = require("cors");


// require("dotenv").config({ path: "./config.env" });
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());
// app.use(require("./routes/record"));

// // get driver connection
// const dbo = require("./db/conn");

// app.listen(port, () => {
//   // perform a database connection when server starts
//   dbo.connectToServer(function (err) {
//     if (err) console.error(err);
//    });
//   console.log(`Server is running on port: ${port}`);
// });

//////////////////////////////////////////////////////////////////////////////

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