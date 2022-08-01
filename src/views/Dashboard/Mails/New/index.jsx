import React, {useState, useRef} from 'react';
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
    const selectUserList = useRef(null)

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

    console.log(sendTo)
    return (
        <>
            <Container className={"h-100 pt-3 "}>
                <Form>
                    <Form.Group>
                        <Form.Label key={'label-users-list'}>
                            Кому
                        </Form.Label>
                        <SelectCustom
                            options={usersList}
                            multi={true}
                            onChange={handleSetSendTo}
                        />
                    </Form.Group>
                </Form>
            </Container>

        </>
    );
};

export default Index;