import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { 
    getStreamer, 
    getLiveStatus, 
    getChannelClips, 
    getChannelUploads, 
    getChannelVideos } from '../../actions/index';
import { CLEAR_STREAMER } from '../../actions/constants';
import HeartIconFilled from '../HeartFilled/index';
import  {
    LeftBar,
    HeartBox,
    StreamerBox,
    StreamerAvatar,
    PlayerBox,
    PlayerIcon,
    StreamerAvatarPlaceHolder
} from './styles';
const Player = require('./video-player.svg');

class LeftNav extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    update(streamer) {
        const { filter } = this.props;
        this.props.getStreamerInfo(streamer);
        this.props.getLiveInfo(streamer);
        if(filter === 'Clips') {
            this.props.getStreamerClips(streamer);
        } else if(filter === 'Uploads') {
            this.props.getStreamerUploads(streamer);
        } else if(filter === 'Highlights') {
            this.props.getStreamerVideos(streamer);
        }
    }

    goToPlaylist = () => {
        const goto = this.props.history.push;
        this.props.clearStreamer();
        goto('/PlayListViewer')
    }

    render() {
        return(
            <LeftBar>
                <PlayerBox onClick={this.goToPlaylist}>
                    <PlayerIcon src={Player} />
                </PlayerBox>
                <HeartBox>
                    <HeartIconFilled style={{width: '30px', height: '30px', opacity: '0.7'}} />
                </HeartBox>
                <StreamerBox>
                    {
                        this.props.favs.length > 0
                            ?
                                this.props.favs.map( (streamer, i) => {
                                    return (
                                        <StreamerAvatar 
                                            src={streamer.avatar} 
                                            key={i} 
                                            onClick={() => this.update(streamer.streamer)}
                                            />
                                    )
                                })
                            :   <div>
                                    <StreamerAvatarPlaceHolder/>
                                    <StreamerAvatarPlaceHolder/>
                                    <StreamerAvatarPlaceHolder/>
                                    <StreamerAvatarPlaceHolder/>
                                </div>
                    }
                </StreamerBox>
            </LeftBar>
        )
    }
}

const mapStateToProps = (state) => ({
    favs: state.favoriteStreamers.streamerList,
    filter: state.appState.filter ? state.appState.filter : "Clips"
});
const mapDispatchTopProps = (dispatch) => ({
    getStreamerInfo: (streamer) => dispatch(getStreamer(streamer)),
    getLiveInfo: (streamer) => dispatch(getLiveStatus(streamer)),
    getStreamerVideos: (streamer) => dispatch(getChannelVideos(streamer)),
    getStreamerClips: (streamer) => dispatch(getChannelClips(streamer)),
    getStreamerUploads: (streamer) => dispatch(getChannelUploads(streamer)),
    clearStreamer: () => dispatch({type: CLEAR_STREAMER, payload: null})
});

export default withRouter(connect(mapStateToProps, mapDispatchTopProps)(LeftNav))