import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import '../style/card.css';

import PopupComponent from './card-pop.tsx';

interface CardProps {
    type: string;
    img: string;
    topping: string[];
    description: string;
    price: string;
    shopCart: any[];
}

const Card = ({ data,type,img,topping,description,price }: CardProps) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="card-container">
            <div className="card-img-holder">
                <img className="card-img" src={img} alt="Logo" />
            </div>

            <div>
                <div className="card-item">{type}</div>
                <div className="card-order">
                    <a type="Button" onClick={handleShow}>Order Now</a>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <PopupComponent type={type} img={img} topping={topping} description={description} price={price} data={data}/>
            </Modal>
        </div>
    );
};

export default Card;
