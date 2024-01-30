// imports dependencies
const fs = require('fs');
const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./db.json");

const route = require("./routes/route.js");

const http = require('http').Server(app);

const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:4000"
    }
});

app.use(cors());
app.use(express.json());

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

let users = [];

//Add this before the app.get() block
socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on('connect_error', (err) => {
    console.log(err.message);

    console.log(err.description);

    console.log(err.context);
  })

  //Listens and logs the message to the console
  socket.on('message', (data) => {
    console.log(data);
    socketIO.emit('messageResponse', data);
  });

  socket.on('newUser', (data) => {
    //Adds the new user to the list of users
    users.push(data);
    console.log(users);
    //Sends the list of users to the client
    socketIO.emit('newUserResponse', users);
  });

  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
    //Updates the list of users when a user disconnects from the server
    users = users.filter((user) => user.socketID !== socket.id);
    console.log(users);
    //Sends the list of users to the client
    socketIO.emit('newUserResponse', users);
    socket.disconnect();
  });
});

app.use('/route', route);

http.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});