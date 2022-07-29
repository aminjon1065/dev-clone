import React, {useState} from 'react';
import {Container, Form} from "react-bootstrap";
import SelectCustom from "../../../../components/SelectCustom";

const Index = () => {
    const [sendTo, setSendTo] = useState([])
    const data = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'}
    ]

    console.log(sendTo)

    const handleSetSendTo = (selected) => {
        setSendTo(selected)
    }
    return (
        <>
            <Container>
                <Form.Group>
                    <div className="row">
                        <Form.Label>
                            Кому
                        </Form.Label>
                        <div className="col-sm-10">
                            <SelectCustom
                                options={data}
                                multi={true}
                                onChange={handleSetSendTo}
                            />
                        </div>
                    </div>
                </Form.Group>
            </Container>

        </>
    );
};

export default Index;