import React from 'react';
import Container from '../components/Container';
import Row from "../components/Row";
import Col from "../components/Col";
import Wrapper from '../components/Wrapper';
import '../styles/contact.css';



function Contact() {
    return (
        <div className="bg-dark text-light page" id="page-content">
            <Wrapper className="bg-dark text-light">
                <Container className="contact-header bg-dark text-light">
                    <Row className="bg-dark text-light">
                        <Col size="md-12" className="text-center bg-dark text-light">
                            <h2 className="text-center contact">Contact Details:</h2>
                            <div class="row">
                                <h5><i class="fab blue  fa-linkedin"> </i></h5>
                                <h5 class="indigo-text"> <a href="https://www.linkedin.com/in/sallyhello1/" target="_blank"> Link to my
                                    Linkedin page</a></h5>
                            </div>
                            <div class="row">
                                <h5><i class="fas  blue resume-icon fa-envelope-square"> </i></h5>
                                <class class="indigo-text">
                                    <h5><a href="mailto:sallyhello1@yahoo.com" target="_blank"> email: sallyhello1@yahoo.com</a></h5>
                                </class>
                            </div>
                            <div class class="row">
                                <h5><i class="fab  blue fa-google"> </i> </h5>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
        </div>

            );
}

            export default Contact;