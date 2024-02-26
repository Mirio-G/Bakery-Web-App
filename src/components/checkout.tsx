import React from "react";
import { useMemo } from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

 // We import all the components we need in our app
import Navbar from "./components/navbar.tsx";
import RecordList from "./components/recordList.tsx";
import Edit from "./components/edit.tsx";
import Create from "./components/create.tsx";

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

// styling
import '../style/App.css'
import '../style/card.css'

// bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Checkout() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: '',
  });

  const center = useMemo(() => ({ lat: 32.6324335, lng: -97.1017739 }), []);

  return (
    <>
      <Container className="cart">
          <Row className="cart2">
            <h1 id="cartText">Cart</h1>
          </Row><br></br>

          <Row>
          <Col className="cartImage">
          <h1 id="cartText">Image</h1>
          </Col>
          <Col>
          <p className="cartText">Name</p><br></br>
          <p className="cartText">$$$</p><br></br>
          <p className="cartText">Quantity</p><br></br>
          </Col>
          </Row> <br></br>

          <Row>
          <Col className="cartImage">
          <h1 id="cartText">Image</h1>
          </Col>
          <Col>
          <p className="cartText">Name</p><br></br>
          <p className="cartText">$$$</p><br></br>
          <p className="cartText">Quantity</p><br></br>
          </Col>
          </Row> <br></br>

          <Row>
          <Col className="cartImage">
          <h1 id="cartText">Image</h1>
          </Col>
          <Col>
          <p className="cartText">Name</p><br></br>
          <p className="cartText">$$$</p><br></br>
          <p className="cartText">Quantity</p><br></br>
          </Col>
          </Row> <br></br>
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
          <Row className="Google_Map">
            {!isLoaded ? (
              <h1>Loading...</h1>
            ) : (
              <GoogleMap
                mapContainerClassName="map-container"
                center={center}
                zoom={10}
              />
            )}
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
    </>
  )
}

export default Checkout
