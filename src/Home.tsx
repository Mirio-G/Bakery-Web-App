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

// bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Carousel from "./components/carousel.tsx";

function home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>ByteSized Bakery</h1>
      <div className="banner">
        <h2>
        Welcome to the ByteSized Bakery App! Here you can order different menu items and services. <br></br>Enjoy your stay!
        </h2>

        <img src="./src/assets/logo.png" alt="Logo"></img>
      </div>


      <Container className="p-4">
        <Row>
          <h3 id="left">Deals</h3>
          <Carousel />
        </Row>
      </Container>

      <Container className="p-4">
        <Row>
          <h3 id="left">Trending</h3>
          <Carousel />
        </Row>
      </Container>

      <div>
        <img src="./src/assets/logo.png" alt="Logo"></img>
      </div>

      <Chatbox />
    </>
  )
}

export default home
