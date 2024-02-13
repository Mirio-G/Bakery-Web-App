import React from 'react';
import Modal from 'react-bootstrap/Modal';

function CardPop() {
    return (
        <div className="card-pop-container">
        <form action="results.html" method="POST">
            <hr></hr>
        
    
            <div className="card-item">
                <h5>Name of item </h5>
              
            </div>
            <div className="card-price">$$$$</div>

            <div className="card-pop-img-holder">
                <img className="card-pop-img" src="./src/assets/logo.png" alt="Logo"></img>
            </div>

            

                <div className="card-quantity">- 1 +</div>
                <div>
                    <select className="card-custom" name="Customize">
                        <option value="custom-1">None</option>
                        <option value="custom-2">..</option>
                        <option value="custom-3">...</option>
                        <option value="custom-4">....</option>
                    </select>
                </div>

                <div className="card-descrip">Description: </div>
                
        
                <div><button type="submit" value="Submit">ADD TO CART</button></div>

            </form>
        </div>
    );
}

export default CardPop;