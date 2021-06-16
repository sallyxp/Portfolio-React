import React from 'react';
import '../styles/home.css';
import Row from "../components/Row";
import { NavLink } from 'react-router-dom';
import portfolioImg from "../images/istockphoto-royalty-free535475263-612x612.jpg";
//import portfolioImg from "../images/myProfilepic.PNG";

function Home() {
    return (
        
        <div className="jumbotron fade-in">
           <Row>
          <img src={portfolioImg} alt="Birmimgham" className="img-thumbnail" /> 
             <h1 className=" flow-text display-4"> Hello, I'm Sally Rodgers, </h1>
            <h2 className="blurb">Full-Stack Web Developer student.</h2>
            </Row>
          
            <NavLink className="btn btn-outline-secondary btn-lg text-center" to="/about">Learn more about me</NavLink>
        
        </div>
    )
};

export default Home;