import React from "react";
import { Button, Container, Row, Col, Nav } from "react-bootstrap";
import NavMenu from './../../components/NavMenu'
const Index = () => {
  return (
    <Container fluid="lg">
      <Row>
        <Col sm="4" lg="3" xl="3" className="d-none d-sm-block">
          <NavMenu />
        </Col>
        <Col className="bg-apple-grey">2</Col>
      </Row>
    </Container>
  );
};

export default Index;
