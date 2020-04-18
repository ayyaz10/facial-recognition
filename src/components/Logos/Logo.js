import React from 'react';
import logo from './img/facial-logo.png';
import './styles.css';

const Logo = () => {
    return (
        <div className="ml4 w-10 logo">
            <img alt="logo" src={logo}/>
        </div>
    )
}
export default Logo;
