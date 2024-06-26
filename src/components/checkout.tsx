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

  var subTotal = 0;

  {items.map((item, idx) => {
    return(
      <div key = {idx}> 
      {subTotal += item.price * item.quantity}
      </div>
    )
  })}
   var salesTax = Math.round((subTotal * .0825)*100)/100;
   var Total = subTotal + salesTax;

  const handleRemoveItem = (e) => {
    const temp = [...items]
    const idx = e.target.getAttribute("index");

    if (idx !== -1) {
      temp.splice(idx,1);
    }
    console.log(idx);

    setItems(temp.length < 1 ? [] : temp);
    
    localStorage.clear();
    localStorage.setItem('cartItems', JSON.stringify(temp));
  };

  const increment = (e) => {
    const temp = [...items]
    const idx = e.target.getAttribute("index");

    temp[idx].quantity++;

    setItems(temp.length < 1 ? [] : temp);
    
    localStorage.clear();
    localStorage.setItem('cartItems', JSON.stringify(temp));
  };

  const decrement = (e) => {
    const temp = [...items]
    const idx = e.target.getAttribute("index");

    if (temp[idx].quantity > 1) {
      temp[idx].quantity--;
      setItems(temp.length < 1 ? [] : temp);
      
      localStorage.clear();
      localStorage.setItem('cartItems', JSON.stringify(temp));
    }
  };

  return (
    <>
      <Container className="cart">
          <Row className="cart2">
            <h1 id="Cart">Cart</h1>
          </Row><br></br>
          {items.map((item, idx) => {
            return(
              <Container key={item.type}>
                <Row>
                  <Col className="cartImage">
                  <img id="cartText" className="card-img" src = {item.img}></img>
                  </Col>
                  <Col>
                  <p className="cartText">{item.type}</p>
                  <p className="cartText">${item.price}</p>
                  <div className="checkout-quantity">
                    <button id="minus" index={idx} onClick={decrement}>-</button>
                    <span id = "makeCenter">{item.quantity}</span>
                    <button id="plus" index={idx} onClick={increment}>+</button>
                  </div>
                  <button name={item.type} index={idx} onClick={handleRemoveItem}>REMOVE ITEM</button> 
                  </Col>
                </Row> <br></br>
              </Container>
            )
          })}
          
        </Container>

        <Container className="Pay">
          <Row>
          <Col className = "subtotal">
            <h1 id="Subtotal"><b>Subtotal</b></h1>
          </Col>
          <Col>
          <h1 id="Subtotal">${subTotal}</h1>
          </Col>
          </Row>

          <Row>
          <Col className = "salestax">
          <h1 id="salestax">Sales Tax</h1>
          </Col>
          <Col>
          <h1 id="salestax">${salesTax}</h1>
          </Col>
          </Row>

          <Row>
          <Col className = "total">
          <h1 id="Total"><b>Total</b></h1>
          </Col>
          <Col>
          <h1 id="Total"><b>${Total}</b></h1>
          </Col>
          </Row>

        </Container><br></br>

        <Container className = "Order">
          <Row >
            <a className="nav-item nav-link" href="/Payment">
              <h1 id="placeorder" className = "placeorder">CONTINUE TO PAYMENT</h1>
            </a>
          </Row>
        </Container>
        
        <Navbar />
    </>
  )
}

export default Checkout
