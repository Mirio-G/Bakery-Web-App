// imports dependencies
const express = require('express');
const router = express.Router()

const fs = require('fs');

//middleware, as a connections to other routes
router.use((req, res, next) => {
	console.log('Time: ', Date.now())
	next()
});

// get drink db
router.get('/drinks', (req, res) => {
  let file = fs.readFileSync('./db.json', 'utf8');
  res.json(JSON.parse(file).drinks);
});

// get bread db
router.get('/breads', (req, res) => {
  let file = fs.readFileSync('./db.json', 'utf8');
  res.json(JSON.parse(file).breads);
});

module.exports = router;