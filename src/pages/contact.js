import React from 'react';
import Container from '../components/Container';
import Row from "../components/Row";
import Col from "../components/Col";
import Wrapper from '../components/Wrapper';
import '../styles/contact.css';
import backgroundImg from "../images/brianLewicki-unsplash-1589352511666-341e33517a0b.jpg";


function Contact() {
    return (
        <div className="bg-light text-light page" id="page-content">
            <Wrapper className="bg-dark text-light">
                <Container className="contact-header bg-dark text-light">

                    <div className="jumbotron fade-in">
                        <Row>
                            <img src={backgroundImg}   alt="Birmimgham" className="img-thumbnail" />
                            <h6 className=" display-4"> Contact Details </h6>
                       
                           
                            <h4 class="indigo-text"> <a href="https://www.linkedin.com/in/sallyhello1/" target="_blank"> Link to my
                                Linkedin page</a></h4> <h4><i class="fab blue  fa-linkedin"> </i></h4>
                        </Row>

                        <div class="row">
                            <h5><i class="fas  blue resume-icon fa-envelope-square"> </i></h5>
                            <class class="indigo-text">
                                <h5><a href="mailto:sallyhello1@yahoo.com" target="_blank"> email: sallyhello1@yahoo.com</a></h5>
                            </class>
                        </div>
                        <div class class="row">
                            <h5><i class="fab  blue fa-google"> </i> </h5>
                        </div>

                      
                    </div>
                {/* Icon Contact Links */}
                <Row size="md-12" className="my-auto d-flex">
                    <Col size="md-1"></Col>
                    <Col size="md-10" className="icon-links">
                        <ul className="d-flex auto-mx justify-content-center">
                            <li className="list-inline-item icon"><a href="mailto:sallyhello1@yahoo.com" rel="noreferrer" target="_blank"><i className="fas fa-envelope fa-3x"></i></a></li>

                            <li className="list-inline-item icon"><a href="https://github.com/sallyxp/" rel="noreferrer" target="_blank"><i className="fab fa-github fa-3x"></i></a></li>
                            <li className="list-inline-item icon"><a href="https://www.linkedin.com/in/sallyhello1/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin fa-3x"></i></a></li>
                        </ul>
                    </Col>
                    <Col size="md-1"></Col>
                </Row>
                </Container>
            </Wrapper>
        </div>

            );
}

export default Contact;