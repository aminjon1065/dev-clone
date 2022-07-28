import React, {useState} from 'react';
import {Container, FormControl} from "react-bootstrap";
import SelectCustom from "../../../../components/SelectCustom";

const Index = () => {
    const data = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'}
    ]

    return (
        <>
            <Container>
                <SelectCustom options={data} multi={false}/>
                <SelectCustom options={data} multi={true}/>
            </Container>

        </>
    );
};

export default Index;