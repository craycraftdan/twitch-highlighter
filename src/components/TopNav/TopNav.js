import React from 'react';
import { connect } from 'react-redux';
import TwitchLogo from '../TwitchLogo/index';
import Search from '../Search/index';
import { withRouter } from 'react-router';
import { StyledNav } from './styles';
import { CLEAR_STREAMER } from '../../actions/constants';

const TopNav = (props) => {

    const goHome = () => {
        const goto = props.history.push;
        props.clearStreamer()
        goto('/')
    }
        return (
        <StyledNav>
            <div onClick={goHome}>
                <TwitchLogo style={{width: '30px', height: '30px', marginLeft: '24px'}}/>
            </div>
            <Search setSelectedStreamer={props.setSelectedStreamer} />
            <div style={{width: '323px'}}></div>
        </StyledNav>
    )
}

const mapDispatchToProps = (dispatch) => ({
    clearStreamer: () => dispatch({type: CLEAR_STREAMER, payload: null})
});

export default withRouter(connect(null, mapDispatchToProps)(TopNav))