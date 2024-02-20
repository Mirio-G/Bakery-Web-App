import React, { useEffect, useState } from "react";

// We use Route in order to define the different routes of our application
import { useNavigate, Route, Routes } from "react-router-dom";

import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:5173/');

 // We import all the components we need in our app
import Test from "./Test.tsx";
import Card from './components/card.tsx'
import CardPop from './components/card-pop.tsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PBar from './components/progress_bar.tsx'

import './style/App.css'
import './style/card.css'

// bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style/card.css';

import Navbar from "./components/navbar.tsx";
import Carousel from "./components/carousel.tsx";

import jsonData from "../server/db.json"

function home() {
  const [count, setCount] = useState(0);

  return (
    
      <>
        <Navbar />

        <Row className="banner p-4">
          <Container>
            <Row className = "top full-bleed">
            <Container>
              <Row >
                <Col>
                <img src="./src/assets/logo.png" alt="Logo"></img>
                </Col>
                <Col>
                  <br/><br/> <h1><i>ByteSized <br/>Bakery</i></h1>
                </Col>
              </Row>
            </Container>
            </Row>
          </Container>
        </Row>
            <Row>
              <div className = "points">
                <span id = "makeLeft">My points</span> <span id = "makeRight">0 pts</span>
              </div>

              <div>
                <PBar/>
              </div>
            </Row>
          



        <Row className="p-4">
          <div>
            <h3 id="left">Deals</h3>
            <Carousel data = {jsonData}/>
          </div>
        </Row>

        <Row className="p-4">
          <div className = "trending">
            <h3 id="left">Trending</h3>
            <Carousel imgSrc="../src/assets/Breads/bagel.jpg" name="Bread"/>
          </div>
        </Row>

      </>
  )

}

export default home
