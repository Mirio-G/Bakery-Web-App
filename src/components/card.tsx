import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import '../style/card.css';

import PopupComponent from './card-pop.tsx';

interface CardProps {
    type: string;
    img: string;
    description: string;
    price: string;
}

const Card = ({ type,img,description,price }: CardProps) => {
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
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    <PopupComponent type={type} img={img} description={description} price={price}/>
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Card;
