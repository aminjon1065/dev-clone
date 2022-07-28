import React, {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import NavMenu from "./../../components/NavMenu";
import DashboardRoutes from "./../../routes/DashboardRoutes";
import Header from "./../../components/header";
import ToastSuccessAuth from "../../components/ToastAuth/ToastSuccessAuth";
import {useLocation} from "react-router-dom";

const Index = () => {
    const location = useLocation();
    const [successAuth, setSuccessAuth] = useState(false);
    useEffect(() => {
        const setAuth = () => {
            setSuccessAuth(location.state);
        };
        setAuth();
    }, [setSuccessAuth]);
    return (
        <>
            <Header/>
            <Container fluid="lg" className="pt-3">
                <Row className="m-0 p-0">
                    <Col sm="3" lg="3" xl="3" className="d-none d-md-block bg- p-0 m-0">
                        <NavMenu/>
                    </Col>
                    <Col>
                        {successAuth ? (
                                <ToastSuccessAuth setSuccessAuth={setSuccessAuth}/>
                        ) : null}
                        <DashboardRoutes/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Index;
