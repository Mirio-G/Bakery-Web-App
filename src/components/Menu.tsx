import React from "react";
import { useMemo, useContext } from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// styling
import '../style/App.css'
import '../style/card.css'
import '../style/index.css'

import Navbar from "./navbar";
import Card from '../components/card.tsx'

// bootstrap
import Container from 'react-bootstrap/Container';
import Row, { RowProps } from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Menu(){
    return(
        <>
    <Navbar/>
    <Container className = "menu_container">
        <Row>
            <Col>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Col>
            <Col>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Col>
        </Row>
    </Container>
    </>
    )
}
export default Menu