import React from 'react';
import Container from '../components/Container';
import Row from "../components/Row";
import Col from "../components/Col";

function Resume() {
    return (
        <div className="bg-info text-light page" id="page-content">
            <Container classname="bio">
                <Row>
                    <Col size="sm-4" id="logo">
                        <h1 className="resume-name">Sally Rodgers</h1>
                    </Col>

                    <h5><i class="fab  blue fa-google"> </i> </h5>
                       
                        <h2 className="text-center contact">My CV</h2>
                      
                    <h5> <a href="https://drive.google.com/file/d/1aR7EbLE7CIa9lU8RjWXmNseDphJk49JV/view?usp=sharing"
                        target="_blank"> Link to my CV</a></h5>


                </Row>
            </Container>
        </div>

    )
};

export default Resume;