import React, { useEffect, useState } from "react";

// We use Route in order to define the different routes of our application
import { useNavigate, Route, Routes } from "react-router-dom";

import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:5173/');

 // We import all the components we need in our app
import Test from "./Test.tsx";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Card from "./components/card.tsx"
>>>>>>> 20547344c6f048dbf4753f2d63feaaaad9592fae
=======
import Card from "./components/card.tsx";
import Chatbox from "./components/chat/chatbox.tsx";
>>>>>>> e06e0923ecdefe9db0e36c6a8982e43ca93012a9

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style/App.css'
import './style/card.css'

import Carousel from "./components/carousel.tsx";

function home() {
  const [count, setCount] = useState(0);

  return (
    <>
<<<<<<< HEAD

      <body>
        <div>
          <h2 id="left"><b>Deals</b></h2>
        </div>
      </body>

      <body>
        <div>
          <h2 id="left"><b>Trending</b></h2>
        </div>
      </body>
=======
      <div>
        
      </div>
      <h1>ByteSized Bakery</h1>
      <div className="banner">
        <h2>
        Welcome to the ByteSized Bakery App! Here you can order different menu items and services. <br></br>Enjoy your stay!
        </h2>

<<<<<<< HEAD
        <img src="./src/assets/logo.png" alt="Logo"></img>
      </div>
      
=======
      <Carousel />
      <Test />
      <Card />
<<<<<<< HEAD
      <Chatbox />
=======
>>>>>>> 20547344c6f048dbf4753f2d63feaaaad9592fae
>>>>>>> 858d42bef5e0b01d14d284293f72da12dd21cfcd
    </>
  )
}

export default home
