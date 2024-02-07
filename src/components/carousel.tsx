import React, { useEffect, useState } from "react";
import Slider from 'react-slick';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import logo from '../assets/logo.png';
import MyComponent from '../components/ScreenChanger.tsx'
import '../carousel-item.css'
import Card from '../components/card.tsx'
import '../style/card.css'
const Carousel = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return ( // container
    <Container>
      <Row >
        <Slider {...settings}>
          <div>
          <MyComponent/>

          </div>
          <div>
            <MyComponent/>
          </div>
          <div>
            <MyComponent/>
          </div>
          <div>
            <MyComponent/>
          </div>
          <div>
            <MyComponent/>
          </div>
          <div>
            <MyComponent/>
          </div>
        </Slider>
      </Row>
    </Container>
  )
}
export default Carousel
