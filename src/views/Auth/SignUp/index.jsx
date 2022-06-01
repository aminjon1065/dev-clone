import React from "react";
import { Container, Image } from "react-bootstrap";
import logo from "./../../../assets/images/logo.png";
const Index = () => {
  return (
    <div>
      <Container className="vh-100 d-flex justify-content-center align-items-center">
        <Container className="sign-in-container col-sm-12 col-md-6 col-lg-5 col-xl-4">
          <Image src={logo} className="mx-auto d-block mb-2" width={96} />
        </Container>
      </Container>
    </div>
  );
};

export default Index;
