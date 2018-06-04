import React, { Component } from 'react';
import LoaderVideoList from '../HOCs/LoaderVideoList/index';
import BoxArt from '../GameBoxArt/index';

import Plus from './button-add.svg';
import Play from './button-play.svg';
import Share from './button-share.svg';

import {
    VideoListContainer,
    Video,
    ThumbNail,
    InfoContainer,
    Title, 
    TitleContainer,
    Subtitle,
    IconBox,
    Icon
} from './styles';

class VideoList extends Component {
    render() {
        return(
            <VideoListContainer>
                {
                    this.props.videos.map( video => {
                        let date = Date.parse(video.published_at);
                        let dateString = new Date(date);
                        return (
                            <Video key={video.title}>
                                <IconBox>
                                    <Icon src={Plus} />
                                    <Icon src={Play} />
                                    <Icon src={Share} />
                                </IconBox>
                                
                                <ThumbNail src={video.thumbnails[0].url} />
                                <InfoContainer>
                                    <BoxArt game={video.game ? video.game : "Unlisted"} />
                                    <TitleContainer>
                                        <Title> { video.title ? video.title : "Untitled"} </Title>
                                        <Subtitle> { video.game } <br /> { dateString.toLocaleDateString() } </Subtitle>
                                    </TitleContainer>
                                </InfoContainer>
                            </Video>
                        )
                    })
                }
            </VideoListContainer>
        )
    }
}

VideoList.defaultProps = {
    videos: []
}

export default LoaderVideoList(VideoList);