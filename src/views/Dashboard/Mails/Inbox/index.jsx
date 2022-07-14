import React, {useEffect, useState} from "react";
import {useQuery} from "react-query";
import axios from "../../../../utils/http/axios";
import Loader from "../../../../components/loaders/loader";
import {Container} from "react-bootstrap";

const Index = () => {
    const [msg, setMsg] = useState([]);
    const [err, setErr] = useState(null);
    const {isFetching} = useQuery("getMessage", async () => {
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
    console.log(isFetching)
    if (isFetching) {
        return (
            <Container className="d-flex justify-content-center">
                <Loader/>
            </Container>
        )
    }

    if (err) {
        console.log(err);
    }
    return (<>

        {
            msg.map((el) => {
                return (
                    <div key={el.id}>
                        <h1>{el.title}</h1>
                        <p>{el.description}</p>
                    </div>
                )
            })
        }
    </>);
};

export default Index;
