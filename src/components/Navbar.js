
import React from 'react';
import { navlink } from "react-router-dom";

 import '../styles/navbar.css';


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
                        <navlink
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/"
                                    ? "nav-link active"
                                    : "nav-link"
                            }>Home</navlink>
                    </li>
                        <li className="nav-item">
                            <navlink
                                to="/portfolio"
                                className={
                                    window.location.pathname === "/portfolio" || window.location.pathname === "/portfolio"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >Portfolio</navlink>
                        </li>
                        <li className="nav-item">
                            <navlink
                                to="/about"
                                className={
                                    window.location.pathname === "/about" || window.location.pathname === "/about"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                About</navlink>
                        </li>

                        <li className="nav-item">
                            <navlink
                                to="/contact"
                                className={
                                    window.location.pathname === "/contact" || window.location.pathname === "/contact"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                Contact</navlink>
                        </li>

                        <li className="nav-item">
                            <navlink
                                to="/resume"
                                className={
                                    window.location.pathname === "/resume" || window.location.pathname === "/resume"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                my CV
                            </navlink>

                        </li>
                </ul>    
            </div>           
        </nav>
    );
}

            export default Navbar;