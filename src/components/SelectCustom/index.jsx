import React from 'react';
import Select from 'react-select'

const Index = ({options, multi = false, onChange}) => {
    return (
        <Select

            className={"border-none"}
            options={options}
            isMulti={multi}
            isClearable
            isSearchable
            onChange={onChange}
        />
    );
};

export default Index;