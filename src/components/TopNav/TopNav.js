import React from 'react';
import TwitchLogo from '../TwitchLogo/index';

import Search from '../Search/index';

import { StyledNav } from './styles';

const TopNav = (props) => {
    return (
        <StyledNav>
            <TwitchLogo style={{width: '32px', height: '32px', marginLeft: '10px'}}/>
            <Search setSelectedStreamer={props.setSelectedStreamer} />
            <div></div>
        </StyledNav>
    )
}

export default TopNav