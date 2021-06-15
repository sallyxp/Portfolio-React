import React from 'react';
import '../styles/home.css';
import { navLink } from 'react-router-dom';

function home() {
    return (
        <div className="jumbotron fade-in">
            <h1 className="display-4"> Hello, I'm Sally Rodgers, </h1>
            <h2 className="blurb">Full-Stack Web Developer student.</h2>

            <navLink className="btn btn-outline-secondary btn-lg text-center" to="/about">Learn more about me</navLink>
        </div>
    )
};

export default home;