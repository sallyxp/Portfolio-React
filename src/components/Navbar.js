
import React from 'react';
 import { NavLink } from "react-router-dom";
// import '../styles/Navbar.css';


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Navlink className="navbar-brand" to="/">Sally Rodgers</Navlink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse float-right" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/"
                                    ? "nav-link active"
                                    : "nav-link"
                            }>Home</NavLink>
                    </li>
                </ul>    
            </div>           
        </nav>
            );
}

            export default Navbar;