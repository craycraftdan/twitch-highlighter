import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UPDATE_FAV_STREAMERS } from '../../actions/constants';

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


class StreamerBox extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.updateFavs = this.updateFavs.bind(this);
    }

    
    updateFavs() {
        console.log('hit')
        const { streamer } = this.props.streamer;
        this.props.updateFavStreamers({fav: {
            streamer: streamer.streamer, 
            avatar: streamer.avatar}
        });
    }

    render() {
        const { streamer } = this.props.streamer;
        return (
            <StreamerContainer>
                <AvatarContainer>
                    <Avatar src={streamer.avatar} alt={streamer.streamer} />
                    <IconBox onClick={this.updateFavs}>
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
}

StreamerBox.defaultProps = {
    streamer: null
}

const mapDispatchTopProps = (dispatch) => ({
    updateFavStreamers: ({fav}) => dispatch({type: UPDATE_FAV_STREAMERS, payload: fav})
});

export default connect(null, mapDispatchTopProps)(StreamerBox)