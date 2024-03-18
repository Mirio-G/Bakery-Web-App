import React, { useEffect, useState } from "react";

// We use Route in order to define the different routes of our application
import { useNavigate, Route, Routes } from "react-router-dom";

 // We import all the components we need in our app
import Card from './components/card.tsx'
import CardPop from './components/card-pop.tsx'
import Checkout from "./components/checkout.tsx"
import PBar from './components/progress_bar.tsx'
import Navbar from "./components/navbar.tsx";
import Carousel from "./components/carousel.tsx";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// styling
import './style/App.css'
import './style/card.css'

// bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import jsonData from "../server/db.json"
import Payment from "./components/payment.tsx"
import axios from 'axios';

function home() {
  const [count, setCount] = useState(0);

  const drinks1 = ["House Milk Tea", "Jasmine Milk Tea", "Caramel Milk Tea"];
  const breads1 = ["Ciabatta", "Bagel", "Focaccia"];


  const drinks2 = ["Thai Milk Tea", "Hong Kong Milk Tea", "Matcha Milk Tea"];
  const breads2 = ["English Muffin", "Flatbread", "Cornbread"];

  const [breadItems, setBreadItems] = useState([]);
  const [drinkItems, setDrinkItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const breadsResponse = await axios.get('http://localhost:5000/route/breads');
                setBreadItems(breadsResponse.data);

                const drinksResponse = await axios.get('http://localhost:5000/route/drinks');
                setDrinkItems(drinksResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

  return (
    
    <>
      <Row className="d-lg-none">
        <Navbar />
      </Row>

      <Row className="banner p-4 top full-bleed">
        <Container>
          <Row >
            <Col>
            <img src="./src/assets/logo.png" alt="Logo"></img>
            </Col>
            <Col>
              <h1 id='Title' ><i>ByteSized <br/>Bakery</i></h1>
            </Col>
          </Row>
        </Container>
      </Row>

      <Row className="p-4">
        <Container className="home__container">
            <Row className="p-4">
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
              <Carousel drinkdata={drinks1} breaddata={breads1} breadItems ={breadItems} drinkItems ={drinkItems}/>
            </div>
          </Row>

          <Row className="p-4">
            <div className = "trending">
              <h3 id="left">Trending</h3>
              <Carousel drinkdata={drinks2} breaddata={breads2} breadItems ={breadItems} drinkItems ={drinkItems}/>
            </div>
          </Row>
        </Container>
      </Row>
    </>
  )
}

export default home
