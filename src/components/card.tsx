import React, { useState } from 'react';
import '../style/card.css';
import PopupComponent from './card-pop.tsx';

interface CardProps {
    imgSrc: string;
    name: string;
}

const Card = ({ imgSrc, name }: CardProps) => {


    return (
        <div className="card-container">
            <div className="card-img-holder">
                <img className="card-img" src={imgSrc} alt="Logo" />
            </div>

            <div>
                <div className="card-item">{name}</div>
                <div className="card-order">
                    <a href="#">Order Now</a>
                </div>
            </div>
        </div>
    );
};

export default Card;
