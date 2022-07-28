import React from 'react';
import Select from 'react-select'

const Index = ({options, multi = false}) => {
    return (
        <Select options={options} isMulti={multi} isClearable isSearchable/>
    );
};

export default Index;