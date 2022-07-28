import React from 'react';
import {Toast, ToastContainer} from "react-bootstrap";

const ToastSuccessAuth = ({setSuccessAuth}) => {
    return (
        <>
            <ToastContainer position={'bottom-end'}>
                <Toast onClose={() => setSuccessAuth(false)} animation={true} delay={5000} autohide>
                    <Toast.Header className="bg-success">
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt=""/>
                        <strong className="me-auto text-light">Успешно!</strong>
                        <small className="text-light">сейчас</small>
                    </Toast.Header>
                    <Toast.Body>Вы успешно вошли в систему</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
};

export default ToastSuccessAuth;