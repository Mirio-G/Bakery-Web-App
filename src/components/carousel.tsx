import React, { useEffect, useState } from "react";
import '../carousel-item.css'
import Card from '../components/card.tsx'
import '../style/card.css'
const Carousel = () => {
  return ( // container
    <div className="slides">
      <div> <Card /> </div>
      <div> 2 </div>
      <div> 3 </div>
      </div>

  )
}
export default Carousel
