import React, {useEffect, useState} from 'react';
import {Container, Form} from "react-bootstrap";
import SelectCustom from "../../../../components/SelectCustom";
import axiosWithInterceptor from "../../../../utils/http/axios";
import {useQuery} from "react-query";
import Loader from "../../../../components/loaders/loader";
import {useNavigate} from "react-router-dom";

const Index = () => {
    const [sendTo, setSendTo] = useState([])
    const [err, setErr] = useState(null);
    const [usersList, setUsersList] = useState([])
    const navigate = useNavigate();

    const datas = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'}
    ]
    const {isLoading} = useQuery("getUersList", async () => {
            return axiosWithInterceptor.get('users-list');
        },
        {
            onSuccess: (res) => {
                setUsersList(res.data)
            },
            onError: (err) => {
                setErr(err)
            }
        }
    )
    if (err?.response?.status === 401) {
        navigate('/sign-in')
    }
    if (isLoading) {
        return (
            <Container className="d-flex justify-content-center">
                <Loader/>
            </Container>
        )
    }


    const handleSetSendTo = (selected) => {
        setSendTo(selected)
    }
    return (
        <>
            <Container className={"h-100 pt-3 "}>
                <Form.Group>
                    <div className="row">
                        <div className="d-flex">
                            <Form.Label>
                                Кому
                            </Form.Label>
                            <div className="col-6 ms-auto">
                                <SelectCustom
                                    options={usersList}
                                    multi={true}
                                    onChange={handleSetSendTo}
                                />
                            </div>
                        </div>

                    </div>
                </Form.Group>
            </Container>

        </>
    );
};

export default Index;