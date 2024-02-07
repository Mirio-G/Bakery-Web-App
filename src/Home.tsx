import React, { useEffect, useState } from "react";

// We use Route in order to define the different routes of our application
import { useNavigate, Route, Routes } from "react-router-dom";

import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:5173/');

 // We import all the components we need in our app
import Test from "./Test.tsx";
import Card from './components/card.tsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './style/App.css'
import './style/card.css'

// bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './style/card.css';

import Carousel from "./components/carousel.tsx";

function home() {
  const [count, setCount] = useState(0);

  return (
      <>

        <Row className="banner p-4">
          <div>
            <h1>ByteSized Bakery</h1>
            <h2 className="d-sm-none d-md-block">
            Welcome to the ByteSized Bakery App! Here you can order different menu items and services. <br></br>Enjoy your stay!
            </h2>
          </div>

          <div>
            <img src="./src/assets/logo.png" alt="Logo"></img>
          </div>

          <div className = "points">
            <h4>My Points</h4> <h5>0 Pts</h5>

            <img src="./src/assets/bar.png" alt="Bar" id="bar"></img>
          </div>
        </Row>


        <Row className="p-4">
          <div>
            <h3 id="left">Deals</h3>
            <Carousel />
          </div>
        </Row>

        <Row className="p-4">
          <div>
            <h3 id="left">Trending</h3>
            <Carousel />
          </div>
        </Row>

        <Row>
          <div>
            <img src="./src/assets/logo.png" alt="Logo"></img>
          </div>
        </Row>

      </>
  )
}

export default home
