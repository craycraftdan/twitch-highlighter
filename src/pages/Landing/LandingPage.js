import React, { Component } from 'react';
import PlayListCreated from '../../components/PlayListCreated/index';
import { 
    Container,
    ToolTips,
    LogoContainer,
    ToolTipBoxSide,
    ToolTipBoxTop,
    PointerTop,
    PointerLeft,
    PointerRight,
    CreatedPlaylist } from './styles';

const TwitchHighlighter = require('./TwitchHighlighter.png')


class LandingPage extends Component {
    render() {
        return(
            <Container>
                <ToolTips>
                    <ToolTipBoxSide>
                        FAV YOUR TOP STREAMERS FOR EASY ACCESS
                        <PointerLeft />
                    </ToolTipBoxSide>
                    <ToolTipBoxTop>
                        SEARCH FOR YOUR FAVORITE STREAMERS
                        <PointerTop />
                    </ToolTipBoxTop>
                    <ToolTipBoxSide>
                        BUILD A PLAYLIST FROM TOP CLIPS THEN SHARE!
                        <PointerRight />
                    </ToolTipBoxSide>
                </ToolTips>
                <LogoContainer>
                    <img src={TwitchHighlighter} alt="twitchLogo"/>
                </LogoContainer>
                <CreatedPlaylist>
                    <PlayListCreated />
                </CreatedPlaylist>
            </Container>
        )
    }
}

export default LandingPage