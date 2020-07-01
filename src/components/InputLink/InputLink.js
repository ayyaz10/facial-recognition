import React from 'react';
import './InputLink.css';

const InputLink = ({onInputChange, onSubmit}) => {
    return (
        <div className="input-link">
            <input className="w-100" type="text" onChange={onInputChange}/>
            <button className="button pointer" onClick={onSubmit}>Detect</button>
        </div>
    )
}
export default InputLink;
