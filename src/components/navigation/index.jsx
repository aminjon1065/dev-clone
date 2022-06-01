import React from "react";
import {Offcanvas, Container} from "react-bootstrap";
import NavMenu from "./../NavMenu";

const Index = ({show, handleClose}) => {
    return (
        <Offcanvas show={show} onHide={handleClose} className="w-50">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                    <NavMenu/>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Index;
