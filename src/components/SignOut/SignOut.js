import React from 'react';

const SignOut = ({ onRouteChange }) => {
    return (
        <nav>
            <p onClick={() => onRouteChange('signin')} className='f3 link dim underline pa3 pointer grow'>Sign Out</p>
        </nav>
    )
}
export default SignOut;
