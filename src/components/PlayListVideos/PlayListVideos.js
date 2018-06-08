import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    REMOVE_VIDEO_PLAYLIST, 
    DELETE_PLAYLIST, 
    UPDATE_MODAL_STATE, 
    UPDATE_ACTIVE_VIDEO 
} from '../../actions/constants';
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
    SocialIcon,
    Icon,
    Trash,
    SocialBox
} from './styles';
const BtnRemove = require('./button-remove.svg');
const BtnPlay = require('./button-play.svg');
const BtnShare = require('./button-share.svg');
const TrashIcon = require('./logo-trash.svg');
const TwitterLogo = require('./logo-twitter.svg');
const InstagramLogo = require('./logo-instagram.svg');
const FbLogo = require('./logo-facebook.svg');
const ShareLogo = require('./logo-share.svg');

class PlayListVideos extends Component {

    removeVid = (video) => {
        const { remove } = this.props;
        remove({video})
    }

    deletePlayList = () => {
        const{ deletePlaylist } = this.props;
        deletePlaylist();
    }

    playVideo = (video) => {
        const { openModal, playVideo } = this.props;
        let open = true;
        openModal({open});
        playVideo({video});
    }

    render() {
        const { videos, title } = this.props;
        return( 
            <VideosBox>
                { videos 
                    ? <div>
                        <Title>
                            {title}
                            <Trash 
                                onClick={this.deletePlayList}
                                src={TrashIcon}/>
                        </Title>
                        <SocialBox> 
                            <SocialIcon src={ShareLogo} />
                            <SocialIcon src={TwitterLogo} />
                            <SocialIcon src={InstagramLogo} />
                            <SocialIcon src={FbLogo} />
                        </SocialBox>
                    </div>
                    : null 
                }
                {
                    ! videos.length > 0
                    ? <p style={{opacity: 0.7}}>
                        Starting adding videos! <br />
                        <span style={{fontSize: '14px'}}>You can hover a video and click the plus icon to add, or drag and drop the video.</span>
                    </p>
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
                                    <Icon src={BtnPlay} onClick={() => this.playVideo(video)}/>
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
    remove: ({video}) => dispatch({type: REMOVE_VIDEO_PLAYLIST, payload: video}),
    deletePlaylist: () => dispatch({type: DELETE_PLAYLIST, payload: null}),
    openModal: ({open}) => dispatch({type: UPDATE_MODAL_STATE, payload: open}),
    playVideo: ({video}) => dispatch({type: UPDATE_ACTIVE_VIDEO, payload: video})
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayListVideos)