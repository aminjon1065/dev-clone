import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Index = () => {
    return (
        <>
         <Nav defaultActiveKey="/home" className="flex-column">
            <Button variant="" className="text-start hover-btn rounded-3 text-apple-red" as={Link} to="/">
              Active
            </Button>
            <Button variant="" className="text-start hover-btn rounded-3 p-0">
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Button>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav>   
        </>
    );
};

export default Index;