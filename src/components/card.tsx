function Card() {
    return ( 
        <div className="card-container">
            <hr></hr>
            <div className="card-item">
                <h5>Name of item</h5>
            </div>
            <div className="card-price">$$$$</div>
            <div className="card-img-holder">
                <img></img>
            </div>

            <div className="card-quantity">- 1 +</div>
            <div className="card-custom">Customize</div>
            <div className="card-descrip"><h2>Description</h2></div>
            <div className="card-add">Add To Cart</div>
        </div>
    );
}
export default Card
