import React from "react";
import { useMemo, useContext } from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

 // We import all the components we need in our app
import Navbar from "./navbar.tsx";

import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// styling
import '../style/App.css'
import '../style/card.css'

// bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Checkout() {
  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: '',
  // });
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems'));
    if (items) {
     setItems(items);
    }
  }, []);

  console.log(items);
  {items.map((item, idx) => {
    console.log("key: ", idx, "value: ", item);
  })}
  
  const remove = (idx: number) => {
    //var updatedItems = items.slice();
    delete items[idx];
    setItems(items);
    // useEffect(() => {
    //   localStorage.setItem('cartItems', JSON.stringify(items))
    // }, [items]);
  }

  return (
    <>
      <Container className="cart">
          <Row className="cart2">
            <h1 id="Cart">Cart</h1>
          </Row><br></br>
          {items.map((item, idx) => {
            return(
              <Container>
                <Row>
                  <Col className="cartImage">
                  <img id="cartText" className="card-img" src = {item.img}></img>
                  </Col>
                  <Col>
                  <p className="cartText">{item.type}</p>
                  <p className="cartText">${item.price}</p>
                  <p className="cartText">{item.quantity}</p>
                  <button onClick={remove(idx)}>Remove Item</button>
                  </Col>
                </Row> <br></br>
              </Container>
            )
          })}
          
        </Container>

        <Container className="Pay">
          <Row>
          <Col className = "subtotal">
            <h1 id="Subtotal">Subtotal</h1>
          </Col>
          <Col>
          <h1 id="Subtotal">$$$</h1>
          </Col>
          </Row>

          <Row>
          <Col className = "salestax">
          <h1 id="salestax">Sales Tax</h1>
          </Col>
          <Col>
          <h1 id="salestax">$$$</h1>
          </Col>
          </Row>

          <Row>
          <Col className = "total">
          <h1 id="Total">Total</h1>
          </Col>
          <Col>
          <h1 id="Total">$$$</h1>
          </Col>
          </Row>

        </Container><br></br>

        

        <Container className = "Order">
          <Row>
            <a className="nav-item nav-link" href="/Payment">
              <h1 id="placeorder" >Continue to Payment</h1>
            </a>
          </Row>
        </Container>


        
        <Navbar />
    </>
  )
}

export default Checkout
