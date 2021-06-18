
import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/navbar.css';


function Navbar() {
    return (
         <nav className="navbar navbar-expand-lg white">
            <NavLink className="navbar-brand" to="/">Sally Rodgers</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse white float-right" id="navbarNav">
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
                        <li className="nav-item">
                            <NavLink
                                to="/portfolio"
                                className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                            >Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className={
                                    window.location.pathname === "/about" || window.location.pathname === "/about"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                About</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/contact"
                                className={
                                    window.location.pathname === "/contact" || window.location.pathname === "/contact"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                Contact</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/resume"
                                className={
                                    window.location.pathname === "/resume" || window.location.pathname === "/resume"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                my CV
                            </NavLink>

                        </li>
                        <li className="nav-item tooltipped btn-floating btn-small indigo darken-4">
                        <i className="fab blue fa-Github"></i>
                            <NavLink
                                to="/resume"
                                className={
                                    window.location.pathname === "https://github.com/sallyxp" || window.location.pathname === "https://github.com/sallyxp"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                              
                            </NavLink>

                        </li>

                        {/* <a href="https://github.com/sallyxp" target="_blank"
                class="tooltipped btn-floating btn-small indigo darken-4" data-position="bottom" data-tooltip="Github">
                <i class="fab blue fa-Github"></i>
              </a></li> */}
                </ul>    
            </div>           
         </nav>
    );
}

            export default Navbar;