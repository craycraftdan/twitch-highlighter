import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ADD_VIDEO_PLAYLIST } from '../../actions/constants';
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

    addVideo(video) {
        const { playlistTitle } = this.props;
        if(playlistTitle.length > 2) {
            this.props.addToPlaylist({video});
        } else {
            console.log("display a visable error here");
        }
    }

    render() {
        return(
            <VideoListContainer>
                {
                    this.props.videos.length > 0
                        ?
                        this.props.videos.map( (video, i) => {
                            let date = Date.parse(video.published_at);
                            let dateString = new Date(date);
                            return (
                                <Video key={i}>
                                    <IconBox>
                                        <Icon src={Plus} onClick={() => this.addVideo(video)} />
                                        <Icon src={Play} />
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
    playlistTitle: state.playlist.playlist
});

const mapDispatchToProps = (dispatch) => ({
    addToPlaylist: ({video}) => dispatch({type: ADD_VIDEO_PLAYLIST, payload: video})
});

export default connect(mapStateToProps, mapDispatchToProps)(LoaderVideoList(VideoList));
