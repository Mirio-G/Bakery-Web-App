import React from 'react';

function Navbar() {
    return (
        <div>
            <nav className="d-lg-none navbar fixed-bottom navbar-light bg-light">
            <a className="nav-item nav-link" href="#">Menu</a>
            <a className="navbar-brand" href="#">
                <img src="./src/assets/toplogo.png" alt="logo" id="navlogo"></img>
            </a>
            <a className="nav-item nav-link" href="#">Checkout</a>
            </nav>
        </div>
    );
}

export default Navbar;