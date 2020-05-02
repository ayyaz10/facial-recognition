import React from 'react';
import './SignOut.css';

const SignOut = ({ onRouteChange, isSignedIn }) => {
        if (isSignedIn) {
            return(
                <p onClick={() => onRouteChange('signout')} className='f3 link dim underline pa3 pointer grow'>Sign Out</p>
            )
    } else {
        return(
        <nav>
            <p onClick={() => onRouteChange('signin')} className='signin f3 link dim underline pa3 pointer grow'>Sign In</p>
            <p onClick={() => onRouteChange('register')} className='register f3 link dim underline pa3 pointer grow'>Register</p>
        </nav>
        )
    }

}
export default SignOut;
