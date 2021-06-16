import React from 'react';
import '../styles/portfolio.css';
import Container from '../components/Container';
import Row from "../components/Row";
import Col from "../components/Col";

function Portfolio() {
    return (
        <div className="bg-dark text-light page" id="page-content">
            <div><h2 className="title text-center display-5">Portfolio</h2><span className="sr-only">Portfolio</span></div>
            <Container>
                <Row className="row">
                    <Col className="col" size="md-6">
                        <div className="card bg-dark border-dark">
                            <img src={process.env.PUBLIC_URL + "/images/dayScheduler"} className="card-img-top" alt="day scheduler" />
                            <div className="card-body text-white bg-dark">
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
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>


    );
}

export default Portfolio;