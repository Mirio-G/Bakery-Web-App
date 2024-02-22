import React from 'react';
import Container from 'react'
import '../style/index.css'

function Navbar() {
    return (
        <div className="container">
            <nav className="navbar fixed-bottom navbar-light bg-light">
            <a className="nav-item nav-link" href="#">
                <h2 id = "makeLeft"><i><b>Menu</b></i></h2>
                </a>
            <a className="navbar-brand" href="#">
                <img src="./src/assets/toplogo.png" alt="logo" id="navlogo"></img>
                </a>
            <a className="nav-item nav-link" href="#">
                <h2 id = "makeRight"><i><b>Checkout</b></i></h2>
                </a>
            </nav>
        </div>
    );
}

export default Navbar;