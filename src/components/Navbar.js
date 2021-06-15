
import React from 'react';
import { navLink}  from "react-router-dom";
// import '../styles/Navbar.css';


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <navlink className="navbar-brand" to="/">Sally Rodgers</navlink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse float-right" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <navLink
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/"
                                    ? "nav-link active"
                                    : "nav-link"
                            }>Home</navLink>
                    </li>
                </ul>    
            </div>           
        </nav>
            );
}

            export default Navbar;