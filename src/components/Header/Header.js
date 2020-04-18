import React from 'react';

const Header = (props) => {
    return (
        <div className='bb b--white-40' style={{display: 'flex', justifyContent:'space-between'}}>
            {props.children}
        </div>
    )
}
export default Header;
