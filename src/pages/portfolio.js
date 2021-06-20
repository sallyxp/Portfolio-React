import React from 'react';
import '../styles/portfolio.css';
import Container from '../components/Container';
import Row from "../components/Row";
import Col from "../components/Col";
import portfolioImg1 from "../images/dayScheduler.png";
import portfolioImg2 from "../images/PasswordGenerator.png";
import portfolioImg3 from "../images/Restaurantpage.png";

function Portfolio() {
    return (
        <div className="bg-light text-blue page" id="page-content">
            <div><h2 className="title text-center display-5">Portfolio</h2>
                <h2 className="big-title">My Portfolio</h2>
            </div>
            <Container>
                <Row className="row">
                    <Col className="col" size="md-6">
                        <div className="card bg-dark border-dark">
                            {/* <img src={process.env.PUBLIC_URL + "/images/dayScheduler.png"} className="card-img-top" alt="day scheduler" /> */}
                            <img src={portfolioImg1} alt="DayScheduler" className="img-thumbnail" />
                        </div>
                    </Col>
                    <Col className="col" size="md-6">
                        <div className="card-body text-blue bg-light">
                            <h5 className="card-title">Day Scheduler</h5>
                            <p className="card-text">This project creates a simple daily calendar to allow a user to save
                                events for each hour
                                of the day by modifying starter code. This app will run in the browser and feature dynamically updated
                                HTML
                                and CSS powered
                                by jQuery.</p>
                            <br /><br />
                            <div className="card-button">
                                <a href="https://sallyxp.github.io/Work-Day-Scheduler/" rel="noreferrer" target="_blank" className="btn btn-secondary ctr"><i class="fas fa-globe"></i> Visit the live page</a>
                                <a href="https://github.com/sallyxp/Work-Day-Scheduler" rel="noreferrer" target="_blank" className="btn btn-secondary"><i className="fab fa-github btn-icon"></i> Github Repository</a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="row">
                   
                    <Col className="col" size="md-6">
                        <div className="card-body text-blue bg-light">
                        <h2 class="flow-text green-text">Password Generator</h2>
                        <p class="flow-text left-align">This repository stores a Javascript password generator program.</p>
                <p class="flow-text left-align">For any selected number
                  between 8 and 128, this program generates a random string. This string (based on user
                  selected choice of character types) can be any combination of uppercase, lowercase,
                  numerical and special characters.</p>
                            <br /><br />
                            <div className="card-button">
                                <a href="https://sallyxp.github.io/Password-Generator/" rel="noreferrer" target="_blank" className="btn btn-secondary ctr"><i class="fas fa-globe"></i> Visit the live page</a>
                                <a href="https://github.com/sallyxp/Password-Generator" rel="noreferrer" target="_blank" className="btn btn-secondary"><i className="fab fa-github btn-icon"></i> Github Repository</a>
                            </div>
                        </div>
                    </Col>
                    <Col className="col" size="md-6">
                        <div className="card bg-dark border-dark">
                            {/* <img src={process.env.PUBLIC_URL + "/images/dayScheduler.png"} className="card-img-top" alt="day scheduler" /> */}
                            <img src={portfolioImg2} alt="PasswordGenerator" className="img-thumbnail" />
                        </div>
                    </Col>
                </Row>
                <Row className="row">
                    <Col className="col" size="md-6">
                        <div className="card bg-dark border-dark">
                            {/* <img src={process.env.PUBLIC_URL + "/images/dayScheduler.png"} className="card-img-top" alt="day scheduler" /> */}
                            <img src={portfolioImg3} alt="DayScheduler" className="img-thumbnail" />
                        </div>
                    </Col>
                    <Col className="col" size="md-6">
                        <div className="card-body text-blue bg-light">
                            <h5 className="card-title">Day Scheduler</h5>
                            <p className="card-text">This project creates a simple daily calendar to allow a user to save
                                events for each hour
                                of the day by modifying starter code. This app will run in the browser and feature dynamically updated
                                HTML
                                and CSS powered
                                by jQuery.</p>
                            <br /><br />
                            <div className="card-button">
                                <a href="https://sallyxp.github.io/Work-Day-Scheduler/" rel="noreferrer" target="_blank" className="btn btn-secondary ctr"><i class="fas fa-globe"></i> Visit the live page</a>
                                <a href="https://github.com/sallyxp/Work-Day-Scheduler" rel="noreferrer" target="_blank" className="btn btn-secondary"><i className="fab fa-github btn-icon"></i> Github Repository</a>
                            </div>
                        </div>
                    </Col>
                </Row>
 
            </Container>
        </div>


    );
}

export default Portfolio;