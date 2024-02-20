import React from 'react';
import Modal from 'react-bootstrap/Modal';

interface CardPopProps {
    imgSrc: string;
    name: string;
}

const CardPop = ({ imgSrc, name }: CardPopProps) => {
    return (
        <div className="card-pop-container">
        <form action="results.html" method="POST">
            <hr></hr>
        
    
            <div className="card-pop-item">
                <h5>{name}</h5>
              
            </div>
            <div className="card-pop-price">$$$$</div>

            <div className="card-pop-img-holder">
                <img className="card-pop-img" src={imgSrc} alt="Logo"></img>
            </div>

            

                <div className="card-pop-quantity">- 1 +</div>
                <div>
                    <select className="card-pop-custom" name="Customize">
                        <option value="custom-1">None</option>
                        <option value="custom-2">..</option>
                        <option value="custom-3">...</option>
                        <option value="custom-4">....</option>
                    </select>
                </div>

                <div className="card-pop-descrip">Description: </div>
                
        
                <div className="card-pop-order"><button type="submit" value="Submit">ADD TO CART</button></div>

            </form>
        </div>
    );
}

export default CardPop;