import React from 'react';
import TwitchLogo from '../TwitchLogo/index';

import Search from '../Search/index';

import { StyledNav } from './styles';

const TopNav = (props) => {
    return (
        <StyledNav>
            <TwitchLogo style={{width: '30px', height: '30px', marginLeft: '24px'}}/>
            <Search setSelectedStreamer={props.setSelectedStreamer} />
            <div style={{width: '323px'}}></div>
        </StyledNav>
    )
}

export default TopNav