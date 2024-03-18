import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

 // We import all the components we need in our app
import Navbar from "./navbar.tsx";

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Payment() {

  return (
    <>
    <Container className = "Payment">
        <Row className="Payment2">
            <h1 id="payText">Payment</h1>
        </Row><br></br>
        <Row>
        <Col>
            <h1 id="payment">Filler Text</h1>
        </Col>
        </Row>
        </Container>

    <Container className = "Location">
        <Row className="Location2">
            <h1 id="LocationText">Delivery Location</h1>
          </Row><br></br>
          <Row>
          <Col>
          <h1 id="location">Filler Text</h1>
          </Col>
          </Row>
        </Container>

        <Container className = "Contact">
        <Row className="Contact2">
            <h1 id="ContactText">Contact Info</h1>
          </Row><br></br>
          <Row>
          <Col>
          <h1 id="contact">Filler Text</h1>
          </Col>
          </Row>
        </Container>

        <Container className = "Order">
          <Row>
            <h1 id="placeorder">Place Order</h1>
          </Row>
        </Container>

        <Navbar />
    </>
  )
}

export default Payment