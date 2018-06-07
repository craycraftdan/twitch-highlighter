import React, { Component } from 'react';
import { connect } from 'react-redux';
import { REMOVE_VIDEO_PLAYLIST } from '../../actions/constants';
import BoxArt from '../GameBoxArt/index';
import { 
    VideosBox,
    Title,
    Video,
    Thumbnail,
    InfoBox,
    TitleBox,
    VidTitle,
    Dimmer,
    DateSubTitle,
    IconBox,
    Icon
} from './styles';
const BtnRemove = require('./button-remove.svg');
const BtnPlay = require('./button-play.svg');
const BtnShare = require('./button-share.svg');

class PlayListVideos extends Component {

    removeVid(video) {
        const { remove } = this.props;
        remove({video})
    }

    render() {
        const { videos, title } = this.props;
        console.log(videos)
        return( 
            <VideosBox>
                { videos ? <Title>{title}</Title> : null }
                {
                    ! videos.length > 0
                    ? "Starting adding videos!"
                    : videos.map((video, i) => {
                        let date = Date.parse(video.published_at);
                        let dateString = new Date(date);
                        return(
                            <Video key={i}>
                                <Dimmer/>
                                <Thumbnail 
                                    src={video.thumbnails[0].url? video.thumbnails[0].url : "No Thumbnail"}
                                    />
                                <InfoBox>
                                    <BoxArt 
                                        style={{width: '34px', height: '50px'}}
                                        game={video.game ? video.game : "Unlisted"}/>
                                    <TitleBox>
                                        <VidTitle>{video.title}</VidTitle>
                                        <DateSubTitle>{ dateString.toLocaleDateString() }</DateSubTitle>
                                    </TitleBox>
                                </InfoBox>
                                <IconBox>
                                    <Icon 
                                        src={BtnRemove} 
                                        onClick={() => this.removeVid(video.title)}/>
                                    <Icon src={BtnPlay} />
                                    <Icon src={BtnShare} />
                                </IconBox>
                            </Video>
                        )
                    })
                }
            </VideosBox>
        )
    }
}

const mapStateToProps = (state) => ({
    videos: state.playlist.videos,
    title: state.playlist.playlist
});

const mapDispatchToProps = (dispatch) => ({
    remove: ({video}) => dispatch({type: REMOVE_VIDEO_PLAYLIST, payload: video})
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayListVideos)