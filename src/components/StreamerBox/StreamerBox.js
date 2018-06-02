import React from 'react';

// import AvatarPlaceholder from './Avatar-Placeholder.png';
// import HeartIconFilled from '../HeartFilled/index';
import HeartIconEmpty from '../HeartEmpty/index';

import {
    StreamerContainer,
    AvatarContainer,
    Avatar,
    InfoBox,
    LiveStatus,
    Streamer,
    Status,
    Game, 
    Live
} from './styles';

const HeartIconStyle = {
    width: '50px',
    height: '50px',
    position: 'absolute',
    top: '33px',
    left: '33px',
    opacity: '0'
}

const StreamerBox = (props) => {
    const { streamer } = props.streamer
    return (
        <StreamerContainer>
            <AvatarContainer>
                <Avatar src={streamer.avatar} alt={streamer.streamer} />
                <HeartIconEmpty style={HeartIconStyle} />
            </AvatarContainer>
            <InfoBox>
                <Streamer> { streamer.streamer } </Streamer>
                <Status> { streamer.status } </Status>
                <Game> { streamer.game } </Game>
                {
                    streamer.online
                        ? <Live> <LiveStatus online/> Live - { streamer.viewers.toLocaleString('en-US') } Viewers</Live>
                        : <Live> <LiveStatus /> Offline</Live>
                }
            </InfoBox>
        </StreamerContainer>
    )
}

StreamerBox.defaultProps = {
    streamer: null
}

export default StreamerBox