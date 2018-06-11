import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    ADD_VIDEO_PLAYLIST, 
    UPDATE_MODAL_STATE, 
    UPDATE_ACTIVE_VIDEO, 
    VIDEO_DRAGGING } from '../../actions/constants';
import LoaderVideoList from '../HOCs/LoaderVideoList/index';
import BoxArt from '../GameBoxArt/index';
import Plus from './button-add.svg';
import Play from './button-play.svg';
import Share from './button-share.svg';
import Views from './icon-views.svg';
import Time from './icon-time.svg';

import {
    VideoListContainer,
    Video,
    ThumbNail,
    InfoTagsBox,
    Tag,
    InfoContainer,
    Title, 
    TitleContainer,
    Subtitle,
    IconBox,
    Icon,
    MiniIcon,
    NoResults
} from './styles';

class VideoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortedVideos: []
        }
    }

    componentDidMount() {
        const { videos } = this.props;
        videos.sort( (a, b) => {
            const validDateOne = new Date(a.published_at)
            const validDateTwo = new Date(b.published_at)
            if (validDateOne > validDateTwo) {
                return -1;
            } else if (validDateOne === validDateTwo) {
                return 0;
            } else {
                return 1;
            }
        })
        this.setState({sortedVideos: videos})
    }

    checkForMatch = (videoTitle) => {
        const { playlistVideos } = this.props;
        let result = false;
        playlistVideos.forEach(video => {
            if(video.title === videoTitle) {
                result = true
            }
        });
        return result
    }

    addVideo = (video) => {
        const { playlistTitle } = this.props;
        if(playlistTitle.length > 2 && this.checkForMatch(video.title) === false) {
            console.log(video)
            this.props.addToPlaylist({video});
        } else {
            console.log("display a visable error here");
        }
    }

    playVideo = (video) => {
        const { openModal, playVideo } = this.props;
        let open = true;
        openModal({open});
        playVideo({video});
    }

    onDrag = (e) => {
        const video = JSON.parse(e.target.dataset.attribute);
        this.props.dragVideo({video});
        console.log(video)
    }

    render() {
        return(
            <VideoListContainer>
                {
                    this.state.sortedVideos.length > 0
                        ?
                        this.state.sortedVideos.map( (video, i) => {
                            let date = Date.parse(video.published_at);
                            let dateString = new Date(date);
                            return (
                                    <Video key={i} draggable data-attribute={JSON.stringify(video)} onDragStart={this.onDrag}>
                                        <IconBox>
                                            <Icon src={Plus} onClick={() => this.addVideo(video)} />
                                            <Icon src={Play} onClick={() => this.playVideo(video)}/>
                                            <Icon src={Share} />
                                        </IconBox>

                                        <InfoTagsBox>
                                            <Tag> <MiniIcon src={Time} /> { video.duration ? video.duration : video.length } </Tag>
                                            <Tag> <MiniIcon src={Views} /> { video.views.toLocaleString('en-US') } </Tag>
                                        </InfoTagsBox>
                                        
                                        <ThumbNail src={video.thumbnails[0].url} />
                                        <InfoContainer>
                                            <BoxArt 
                                                style={{width: '40px', height: '56px'}}
                                                game={video.game ? video.game : "Unlisted"} />
                                            <TitleContainer>
                                                <Title> { video.title ? video.title : "Untitled"} </Title>
                                                <Subtitle> { video.game } <br /> { dateString.toLocaleDateString() } </Subtitle>
                                            </TitleContainer>
                                        </InfoContainer>
                                    </Video>
                            )
                        })
                        :
                        <NoResults>
                            No Results, trying searching for another type of video!
                        </NoResults>
                }
            </VideoListContainer>
        )
    }
}

VideoList.defaultProps = {
    videos: []
}

const mapStateToProps = (state) => ({
    playlistTitle: state.playlist.playlist,
    playlistVideos: state.playlist.videos
});

const mapDispatchToProps = (dispatch) => ({
    addToPlaylist: ({video}) => dispatch({type: ADD_VIDEO_PLAYLIST, payload: video}),
    openModal: ({open}) => dispatch({type: UPDATE_MODAL_STATE, payload: open}),
    playVideo: ({video}) => dispatch({type: UPDATE_ACTIVE_VIDEO, payload: video}),
    dragVideo: ({video}) => dispatch({type: VIDEO_DRAGGING, payload: video})
});

export default connect(mapStateToProps, mapDispatchToProps)(LoaderVideoList(VideoList));


        