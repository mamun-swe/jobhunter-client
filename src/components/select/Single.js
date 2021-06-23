import React from 'react'
import Select from 'react-select'

const SingleSelect = (props) => {
    const handleSelect = event => props.value(event)

    return (
        <div>
            <Select
                styles={props.error ? errorStyle : customStyles}
                options={props.options}
                onChange={handleSelect}
                classNamePrefix="custom-select"
                placeholder={`Select ${props.placeholder}`}
                defaultValue={props.deafult ? props.deafult.map(item => ({ value: item._id, label: item.name })) : null}
            />
        </div>
    );
};

export default SingleSelect;
const customStyles = {
    control: (provided, state) => ({
        ...provided,
        minHeight: 70,
        fontSize: 16,
        color: '#000',
        boxShadow: 'none', '&:hover': { borderColor: '1px solid #ced4da' },
        border: 0,
        borderRadius: 0
    })
}

const errorStyle = {
    control: (provided) => ({
        ...provided,
        minHeight: 70,
        fontSize: 16,
        color: '#000',
        boxShadow: 'none', '&:hover': { borderColor: '1px solid #ced4da' },
        border: 0,
        borderRadius: 0
    })
}