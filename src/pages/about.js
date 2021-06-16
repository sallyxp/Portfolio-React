import React from 'react';
import '../styles/about.css';
import Container from '../components/Container';
import Row from "../components/Row";
import Col from "../components/Col";



function About() {
    return (
       
        <div className="bg-dark text-light page" id="page-content">
            <Container className="bio">
                <Row>
                    <Col size="md-4">
                        <figure>
                            <img id="bio-pic" className="img-fluid" src={process.env.PUBLIC_URL + "/images/myProfilepic.PNG"} alt="" />
                        </figure>
                    </Col>

                    <Col size="md-8" className="about">
                        <h1 className="summary">Summary</h1>
                      <br></br>
                        <h5> Hello! I am Sally Rodgers and I have been working within the IT Industry for more than 20 years.
                            I have an MSc in Computing Science and had been working particularly as a Database designer and programmer,
                            until
                            a car accident within my family forced an employment gap. Since returning back to work, my work has mostly
                            been
                            within data analysis and reporting. While Coronavirus has meant a hiatus in several activities, I decided to
                            expand
                            my horizons and develop new skills.
                        </h5>
                       <br></br>
                    </Col>      
                </Row>
            
            </Container>
        </div>

                );
}

export default About;