import React, { useEffect, useState } from "react";
import Slider from 'react-slick';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../carousel-item.css'
import Card from '../components/card.tsx'
import '../style/card.css'


import Test from '/src/Test.tsx'

const Carousel = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return ( // container
    <Container>
      <Row>
        <Slider {...settings}>
          <div>
            <Card imgSrc="./src/assets/logo.png" name="Logo"/>
          </div>
        <div>
            <Card imgSrc="./src/assets/Breads/bagel.jpg" name="Bagel"/>
          </div>
          <div>
            <Card/>
          </div>
          <div>
            <Card/>
          </div>
          <div>
            <Card/>
          </div>
          <div>
            <Card/>
          </div>
        </Slider>
      </Row>

      <div><Test /></div>
    </Container>
  )
}
export default Carousel
