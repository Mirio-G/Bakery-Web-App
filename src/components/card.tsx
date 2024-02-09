import React from 'react';

function Card() {
    return (

        <div className="card-container">
            <div className="card-img-holder">
                <img className="card-img" src="./src/assets/logo.png" alt="Logo"></img>
            </div>

            <div><div className="card-price">$$$$</div> <a>Order Now</a></div>
        </div>
    );
}

export default Card;