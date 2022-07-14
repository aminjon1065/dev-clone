import React from "react";
import {Routes, Route} from "react-router-dom";
import Inbox from "../../views/Dashboard/Mails/Inbox";
import Sent from "../../views/Dashboard/Mails/Sent";
import Drafts from "../../views/Dashboard/Mails/Drafts";
import Main from "../../views/Dashboard/Main";
import NotFound from "./../../views/NotFound/";
import New from "../../views/Dashboard/Mails/New";
import {Container} from "react-bootstrap";

const Index = () => {
    return (
        <Container fluid className="bg-white rounded">
            <Routes>
                <Route path={"/"} element={<Main/>}/>
                <Route path={"/new"} element={<New/>}/>
                <Route path={"/inbox"} element={<Inbox/>}/>
                <Route path={"/sent"} element={<Sent/>}/>
                <Route path={"/drafts"} element={<Drafts/>}/>
                <Route path={"*"} element={<NotFound/>}/>
            </Routes>
        </Container>
    );
};

export default Index;
