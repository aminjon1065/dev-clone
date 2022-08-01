import React, {useState} from "react";
import {useQuery} from "react-query";
import Loader from "../../../../components/loaders/loader";
import {Container} from "react-bootstrap";
import Inbox from "../../../../components/Mail/inbox";
import {useNavigate} from "react-router-dom";
import axiosWithInterceptor from "../../../../utils/http/axios";

const Index = () => {
    const token = localStorage.getItem('__token');
    const navigate = useNavigate();
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    const [msg, setMsg] = useState([]);
    const [err, setErr] = useState(null);
    const {isLoading} = useQuery("getMessage", async () => {
            return axiosWithInterceptor.get('/inbox');
        },
        {
            onSuccess: (res) => {
                setMsg(res.data.data)
            },
            onError: (err) => {
                setErr(err)
            },
        });
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


    return (<>
        <Container fluid className="wh-100">
            <Inbox msg={msg}/>
        </Container>
    </>);
};

export default Index;
