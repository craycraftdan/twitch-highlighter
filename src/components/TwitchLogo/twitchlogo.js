import React from 'react';
import logo from './Twitch_logo.svg';

const TwitchLogo = (props) => {
    return (
        <img 
            src={logo} 
            alt="Kiwi standing on oval"
            style={props.style}
            >
        </img>
    )
}

export default TwitchLogo