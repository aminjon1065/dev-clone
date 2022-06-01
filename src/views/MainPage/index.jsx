import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import NavMenu from './../../components/NavMenu'

const Index = () => {
    return (
        <Container fluid="lg">
            <Row className="m-0 p-0">
                <Col sm="3" lg="2.5" xl="2.5" className="d-none d-md-block bg- p-0 m-0">
                    <NavMenu/>
                </Col>
                <Col>2</Col>
            </Row>
        </Container>
    );
};

export default Index;
