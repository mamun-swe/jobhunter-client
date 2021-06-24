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
                components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                defaultValue={props.deafult ? { value: props.deafult.value, label: props.deafult.label } : null}
            />
        </div>
    );
};

export default SingleSelect;
const customStyles = {
    control: (provided, state) => ({
        ...provided,
        minHeight: 48,
        fontSize: 12,
        color: '#000',
        boxShadow: 'none', '&:hover': { borderColor: '1px solid #e5e6e9' },
        border: state.isFocused ? '1px solid #e5e6e9' : '1px solid #e5e6e9',
        borderRadius: 0
    })
}

const errorStyle = {
    control: (provided) => ({
        ...provided,
        minHeight: 48,
        fontSize: 12,
        color: '#000',
        boxShadow: 'none', '&:hover': { borderColor: '1px solid #e5e6e9' },
        border: '1px solid red',
        borderRadius: 0
    })
}