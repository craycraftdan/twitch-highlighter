import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UPDATE_FAV_STREAMERS, REMOVE_FAV_STREAMER } from '../../actions/constants';

import AvatarPlaceholder from './Avatar-Placeholder.png';
import HeartIconFilled from './Icon-Heart-Filled.svg';
import HeartIconEmpty from './Icon-Heart-Empty.svg';

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
        this.checkForMatches = this.checkForMatches.bind(this);
        this.getIcon = this.getIcon.bind(this);
    }



    getIcon(streamer) {
        const { favs } = this.props
        let icon = HeartIconEmpty;
        favs.forEach(fav => {
            if(fav.streamer === streamer) {
                icon = HeartIconFilled
            }
        })
        return icon
    }

    checkForMatches(streamer) {
        const { favs } = this.props
        let results = false;
        favs.forEach(fav => {
            if(fav.streamer === streamer) {
                results = true 
            }
        })
        return results
    }

    updateFavs() {
        const { streamer } = this.props.streamer;
        if(streamer.streamer !== "No Results" && this.checkForMatches(streamer.streamer) !== true) {
            this.props.updateFavStreamers({fav: {
                streamer: streamer.streamer, 
                avatar: streamer.avatar}
            })
        } else {
            this.props.removeFavStreamer({fav:{streamer: streamer.streamer}});
        }
    }

    render() {
        const { streamer } = this.props.streamer;
        return (
            <StreamerContainer>
                <AvatarContainer>
                    <Avatar 
                        src={streamer.avatar ? streamer.avatar : AvatarPlaceholder} 
                        alt={streamer.streamer} 
                        />
                    <IconBox onClick={this.updateFavs}>
                        <Icon src={this.getIcon(streamer.streamer)} />
                    </IconBox>
                </AvatarContainer>
                <InfoBox>
                    <Streamer> { streamer.streamer } </Streamer>
                    <Status> { streamer.status } </Status>
                    <Game> { streamer.game } </Game>
                    {
                        streamer.online
                            ?   <Live> 
                                    <LiveStatus online/> Live - { streamer.viewers.toLocaleString('en-US') } Viewers
                                </Live>
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

const mapStateToProps = (state) => ({
    favs: state.favoriteStreamers.streamerList
});

const mapDispatchTopProps = (dispatch) => ({
    updateFavStreamers: ({fav}) => dispatch({type: UPDATE_FAV_STREAMERS, payload: fav }),
    removeFavStreamer: ({fav}) => dispatch({type: REMOVE_FAV_STREAMER, payload: fav})
});

export default connect(mapStateToProps, mapDispatchTopProps)(StreamerBox)