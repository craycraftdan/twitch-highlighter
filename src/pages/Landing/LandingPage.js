import React, { Component } from 'react';
import { 
    Container,
    ToolTips,
    LogoContainer,
    ToolTipBoxSide,
    ToolTipBoxTop,
    PointerTop,
    PointerLeft,
    PointerRight, } from './styles';

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
            </Container>
        )
    }
}

export default LandingPage