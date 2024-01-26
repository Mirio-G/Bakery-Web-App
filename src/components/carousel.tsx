import React, { useEffect, useState } from "react";
import '../carousel-item.css'

const Carousel = () => {
  const data = ['1','2','3','4'] // information item
  const [currentIndex, setCurrentIndex] = useState(0) //load the card of the current element

  const carouselInfiniteScroll = () => { //scroll
    if (currentIndex === data.length-1 ){
      return setCurrentIndex(0)
    }
    return setCurrentIndex(currentIndex+1)
  }

  useEffect(()=>{ // forever scroll through cards
    const interval = setInterval (()=>{carouselInfiniteScroll()},3000)
    return() =>clearInterval(interval)})

  return ( // container
    <div className = 'carousel-container'> 
      {data.map((item,index) =>{
        return <h1 className = 'carousel-item' // item
          style = {{transform: `translate(-${currentIndex *100 }%)`}} //styling
          key={index}>{item}</h1>}) //
      }
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>

  )

}
export default Carousel
