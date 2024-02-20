import React, { useEffect, useState } from "react";
import Slider from 'react-slick';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../carousel-item.css'
import Card from '../components/card.tsx'
import '../style/card.css'


import Test from '/src/Test.tsx'

interface CarouselProps {
  drinkdata: string[];
  breaddata: string[];
  breadItems: any[];
  drinkItems: any[];
}

const Carousel = ({ drinkdata, breaddata, breadItems, drinkItems}: CarouselProps) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  };


  return ( // container
    <Container>
      <Row>
      <Slider {...settings}> 
      {drinkItems.map((drink, index) => {
        const isSelected = drinkdata.includes(drink.type);
        if (isSelected) {
          return (
            <div key={index}>
              <Card type={drink.type} img={drink.img} description={drink.description} price={"9.99"}/>
            </div>
          );
      }
      return null;
      })}

      {breadItems.map((bread, index) => {
        const isSelected = breaddata.includes(bread.type);
        if (isSelected) {
          return (
            <div key={index}>
              <Card type={bread.type}img={bread.img} description={bread.description} price={bread.price}/>
            </div>
          );
      }
      return null;
      })}


        </Slider>
      </Row>
    </Container>
  )
}
export default Carousel
