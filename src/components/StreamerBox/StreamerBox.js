import React from 'react';

// import AvatarPlaceholder from './Avatar-Placeholder.png';
// import HeartIconFilled from '../HeartFilled/index';
import HeartIconEmpty from './Heart-Icon-Empty.svg';

import {
    StreamerContainer,
    AvatarContainer,
    Avatar,
    InfoBox,
    LiveStatus,
    Streamer,
    Status,
    Game, 
    Live,
    IconBox,
    Icon
} from './styles';


const StreamerBox = (props) => {
    const { streamer } = props.streamer
    return (
        <StreamerContainer>
            <AvatarContainer>
                <Avatar src={streamer.avatar} alt={streamer.streamer} />
                <IconBox>
                    <Icon src={HeartIconEmpty} />
                </IconBox>
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