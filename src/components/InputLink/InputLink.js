import React from 'react';
import './InputLink.css';

const InputLink = ({onInputChange, onSubmit}) => {
    return (
        <div className="input-link">
            <input type="text" onChange={onInputChange}/>
            <button className="pointer" onClick={onSubmit}>Detect</button>
        </div>
    )
}
export default InputLink;
