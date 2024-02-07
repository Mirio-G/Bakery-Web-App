import React, { useEffect, useState } from "react";
import Slider from 'react-slick';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import logo from '../assets/logo.png';

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
            <img className="d-block w-100" src={logo} alt="First slide"/>
          </div>
          <div>
            <img className="d-block w-100" src={logo} alt="First slide"/>
          </div>
          <div>
            <img className="d-block w-100" src={logo} alt="First slide"/>
          </div>
          <div>
            <img className="d-block w-100" src={logo} alt="First slide"/>
          </div>
          <div>
            <img className="d-block w-100" src={logo} alt="First slide"/>
          </div>
          <div>
            <img className="d-block w-100" src={logo} alt="First slide"/>
          </div>
        </Slider>
      </Row>
    </Container>
  )
}
export default Carousel
