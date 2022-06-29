import React from 'react';
import {Toast, ToastContainer} from "react-bootstrap";

const Index = ({setErrorsAuth}) => {
    return (
        <>
            <ToastContainer position={"top-center"}>
                <Toast onClose={() => setErrorsAuth('')} animation={true}>
                    <Toast.Header className={"bg-danger"}>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt=""/>
                        <strong className="me-auto text-light">Ошибка</strong>
                        <small className="text-light">сейчас</small>
                    </Toast.Header>
                    <Toast.Body>Вы ввели не правильный E-mail или пароль.</Toast.Body>
                </Toast>
            </ToastContainer>

        </>
    );
};

export default Index;