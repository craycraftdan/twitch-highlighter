import React from 'react';
import logo from './Heart-Icon-Filled.svg';

const HeartIconFilled = (props) => {
    return (
        <img 
            src={logo} 
            alt="Filled Heart"
            style={props.style}
            >
        </img>
    )
}

export default HeartIconFilled