import React from 'react';

function Card-Pop() {
    return (
        <div className="card-container">
        <form action="results.html" method="POST">
            <hr></hr>
        
    
            <div className="card-item">
                <h5>Name of item </h5>
              
            </div>
            <div className="card-price">$$$$</div>

            <div className="card-img-holder">
                <img className="card-img" src="./src/assets/logo.png" alt="Logo"></img>
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

export default Card-Pop;