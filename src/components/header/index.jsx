import React, { useState } from "react";
import {
  Button,
  Container,
  Dropdown,
  FormControl,
  InputGroup,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { MdNotificationsActive } from "react-icons/md";
import Navigation from "./../navigation";
const Index = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar
        collapseOnSelect
        sticky={"top"}
        bg="white"
        expand="sm"
        className="shadow-sm"
      >
        <Container fluid="lg">
          <Button
            variant="primary"
            onClick={handleShow}
            className="d-sm-block d-md-none"
          >
            Launch
          </Button>
          {show ? <Navigation show={show} handleClose={handleClose} /> : null}
          <Navbar.Brand as={Link} to={"/"} className="m-0">
            <span className="m-0 p-0 fw-bold fw-lighter bg-dark text-light ps-2 pe-2 pt-1 pb-1 rounded-3 lh-1">
              AKN
            </span>
          </Navbar.Brand>
          <Container className="search-container ms-0">
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Search"
                className="shadow-none border-hover-links search-input rounded"
                aria-label="Search"
              />
              <span className="position-relative d-flex justify-content-center align-content-center">
                <Button
                  className="search-btn border-0 shadow-none"
                  variant="outline-hover-links"
                >
                  <BsSearch className="text-black" />
                </Button>
              </span>
            </InputGroup>
          </Container>
          <div className="d-flex justify-content-center align-items-center">
            <span className={"me-1 fs-4"}>
              <MdNotificationsActive />
            </span>
            <Dropdown role={"menu"}>
              <Dropdown.Toggle
                as={"span"}
                className="profile-dropdown fs-4"
                id="dropdown-basic"
              >
                <BiUserCircle />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Index;