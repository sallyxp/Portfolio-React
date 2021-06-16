import React from 'react';
import Container from '../components/Container';
import Row from "../components/Row";
import Col from "../components/Col";

function Resume() {
    return (
        <div className="bg-dark text-light page" id="page-content">
            <Container classname="bio">
                <Row>
                    <Col size="sm-4" id="logo">
                        <h1 className="resume-name">Sally Rodgers</h1>
                    </Col>

                </Row>
            </Container>
        </div>

    )
};

export default Resume;