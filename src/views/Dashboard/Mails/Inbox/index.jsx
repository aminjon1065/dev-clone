import React, {useEffect, useState} from "react";
import {useQuery} from "react-query";
import axios from "../../../../utils/http/axios";
import Loader from "../../../../components/loaders/loader";
import {Container} from "react-bootstrap";
import Inbox from "../../../../components/Mail/inbox";
import {useNavigate} from "react-router-dom";

const Index = () => {
    const token = localStorage.getItem('__token');
    const navigate = useNavigate();
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    const [msg, setMsg] = useState([]);
    const [err, setErr] = useState(null);
    const {isLoading, data, error} = useQuery("getMessage", async () => {
            return axios.get('/inbox');
        },
        {
            onSuccess: (res) => {
                setMsg(res.data.data)
            },
            onError: (err) => {
                setErr(err)
            },
        });

    if (isLoading) {
        return (
            <Container className="d-flex justify-content-center">
                <Loader/>
            </Container>
        )
    }

    if (err?.response?.status === 401) {
        navigate('/sign-in')
    }
    return (<>
        <Container fluid className="wh-100">
            <Inbox msg={msg}/>
        </Container>
    </>);
};

export default Index;
