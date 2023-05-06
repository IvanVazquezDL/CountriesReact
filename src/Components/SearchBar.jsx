import PropTypes from 'prop-types';
import { useState } from "react";

export const SearchBar = ({ onNewValue, placeholder }) => {
    const [ inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim() === 0) return;
        onNewValue(inputValue.trim());
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onChange={onInputChange}
                />
        </form>
    )
}

SearchBar.propTypes = {
    onNewValue: PropTypes.func.isRequired,
    placeholder: PropTypes.string
}