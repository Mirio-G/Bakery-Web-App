import React, { useEffect, useState } from "react";
import { useMemo, useContext } from "react";

import axios from 'axios';

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

interface Menu {
    breadItems: any[];
    drinkItems: any[];
  }
function Menu(){

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

    return(
        <>
    <Navbar/>
    <Container className = "menu_container">
        <Row>
            <Col>
                {drinkItems.map((drink, index) => {
                    return (
                    <div key={index}>
                    <Card type={drink.type} img={drink.img} topping={drink.topping} description={drink.description} price={drink.price} data={drink}/>
                    </div> )})
                }
            </Col>

            <Col>
                {breadItems.map((bread, index) => {
                    return (
                    <div key={index}>
                    <Card type={bread.type} img={bread.img} topping={bread.topping} description={bread.description} price={bread.price} data={bread}/>
                    </div> )})
                }
            </Col>
        </Row>
    </Container>
    </>
    )
}
export default Menu