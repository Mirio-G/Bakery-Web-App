import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import Dropdown from './dropdown.tsx';

interface CardPopProps {
    type: string;
    topping: string[];
    size: string[];
    img: string;
    description: string;
    price: string;
}



const CardPop = ({ type, topping, size,img,description, price }: CardPopProps) => {
    const [quantity, setQuantity] = useState(0);

    const increment = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };
    
    return (
        <div className="card-pop-container">
            <hr></hr>
    
            <div className="card-pop-item">
                <h5>{type}</h5>
            </div>
            <div className="card-pop-price">${price}</div>

            <div className="card-pop-img-holder">
                <img className="card-pop-img" src={img} alt="Logo"></img>
            </div>

            <div className="card-pop-quantity">
                <button id="makeLeft" onClick={decrement}>-</button>
                <span>{quantity}</span>
                <button id="makeRight" onClick={increment}>+</button>
            </div>

            <Dropdown topping={topping}/>

            <div className="card-pop-descrip">Description: {description}</div>
    
            <div className="card-pop-order"><button type="submit" value="Submit">ADD TO CART</button></div>

        </div>
    );
}

export default CardPop;