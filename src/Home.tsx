import React, { useEffect, useState } from "react";

// We use Route in order to define the different routes of our application
import { useNavigate, Route, Routes } from "react-router-dom";

import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:5173/');

 // We import all the components we need in our app
import Test from "./Test.tsx";
import Card from "./components/card.tsx";
import Chatbox from "./components/chat/chatbox.tsx";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style/App.css'
import './style/card.css'

import Carousel from "./components/carousel.tsx";

function home() {
  const [count, setCount] = useState(0);

  return (
    <>

      <div>

      </div>
      <h1>ByteSized Bakery</h1>
      <div className="banner">
        <h2>
        Welcome to the ByteSized Bakery App! Here you can order different menu items and services. <br></br>Enjoy your stay!
        </h2>


        <img src="./src/assets/logo.png" alt="Logo"></img>
      </div>


      <div>
        <h2 id="left">Deals</h2>
        <Carousel />
      </div>

      <div>
        <h2 id="left">Trending</h2>
        <Carousel />
      </div>

      <Test />
      <Card />

    </>
  )
}

export default home
