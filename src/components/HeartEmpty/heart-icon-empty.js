import React from 'react';
import logo from './Heart-Icon-Empty.svg';

const HeartIconEmpty = (props) => {
    return (
        <img 
            src={logo} 
            alt="Empty Heart"
            style={props.style}
            >
        </img>
    )
}

export default HeartIconEmpty