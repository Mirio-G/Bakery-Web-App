import React, { useEffect, useState } from "react";

// We use Route in order to define the different routes of our application
import { useNavigate, Route, Routes } from "react-router-dom";

import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:5173/');

 // We import all the components we need in our app
"./components/navbar.tsx";
import RecordList from "./components/recordList.tsx";
import Edit from "./components/edit.tsx";
import Create from "./components/create.tsx";
import Test from "./Test.tsx";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style/App.css'

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

        <img src="./src/assets/logo.png" alt="Logo"></img> <br></br>
        <img src="./src/assets/bar.png" alt="Bar" id="bar"></img>
      </div>


      <div>
        <h3 id="left">Deals</h3>
        <Carousel />
      </div>

      <div>
        <h3 id="left">Trending</h3>
        <Carousel />
      </div>

      <Test />

      
    </>
  )
}

export default home
