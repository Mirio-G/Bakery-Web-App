import React, { useEffect, useState } from "react";
import Slider from 'react-slick';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import logo from '../assets/logo.png';

import '../carousel-item.css'
import Card from '../components/card.tsx'
import '../style/card.css'
const Carousel = () => {
<<<<<<< HEAD
=======
  return ( // container
    <div className="slides">
      <div> <Card /> </div>
      <div> 2 </div>
      <div> 3 </div>
      </div>
>>>>>>> ebbe502f4c1e59889ca9e457f8f9f7fcf563e5d3

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return ( // container
    <Container>
      <Row >
        <Slider {...settings}>
          <div>
            <img class="d-block w-100" src={logo} alt="First slide"/>
          </div>
          <div>
            <img class="d-block w-100" src={logo} alt="First slide"/>
          </div>
          <div>
            <img class="d-block w-100" src={logo} alt="First slide"/>
          </div>
          <div>
            <img class="d-block w-100" src={logo} alt="First slide"/>
          </div>
          <div>
            <img class="d-block w-100" src={logo} alt="First slide"/>
          </div>
          <div>
            <img class="d-block w-100" src={logo} alt="First slide"/>
          </div>
        </Slider>
      </Row>
    </Container>
  )
}
export default Carousel
