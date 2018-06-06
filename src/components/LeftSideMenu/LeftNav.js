import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStreamer, getLiveStatus, getChannelClips } from '../../actions/index';

import HeartIconFilled from '../HeartFilled/index';
import  {
    LeftBar,
    HeartBox,
    StreamerBox,
    StreamerAvatar,
    StreamerAvatarPlaceHolder
} from './styles';


class LeftNav extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    update(streamer) {
        this.props.getStreamerInfo(streamer);
        this.props.getLiveInfo(streamer);
        this.props.getStreamerClips(streamer);
    }

    render() {
        return(
            <LeftBar>
                <HeartBox>
                    <HeartIconFilled style={{width: '28px', height: '28px', opacity: '0.7'}} />
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
    favs: state.favoriteStreamers.streamerList
});
const mapDispatchTopProps = (dispatch) => ({
    getStreamerInfo: (streamer) => dispatch(getStreamer(streamer)),
    getLiveInfo: (streamer) => dispatch(getLiveStatus(streamer)),
    // getStreamerVideos: (streamer) => dispatch(getChannelVideos(streamer)),
    getStreamerClips: (streamer) => dispatch(getChannelClips(streamer)),
    // getStreamerUploads: (streamer) => dispatch(getChannelUploads(streamer))
});

export default connect(mapStateToProps, mapDispatchTopProps)(LeftNav)