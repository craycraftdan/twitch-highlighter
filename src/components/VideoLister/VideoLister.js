import React from 'react';

import {
    VideoListContainer,
    Video,
    ThumbNail,
    InfoContainer,
    BoxArt,
    Title, 
    TitleContainer,
    Subtitle
} from './styles';

const VideoList = (props) => {
    console.log(props)
    return(
        <VideoListContainer>
            {
                props.videos.map( video => {
                    return (
                        <Video key={video.title}>
                            <ThumbNail src={video.thumbnails[0].url} />
                            <InfoContainer>
                                <BoxArt />
                                <TitleContainer>
                                    <Title> {video.title} </Title>
                                    <Subtitle> { video.game } - { video.published_at } </Subtitle>
                                </TitleContainer>
                            </InfoContainer>
                        </Video>
                    )
                })
            }
        </VideoListContainer>
    )
}

VideoList.defaultProps = {
    videos: []
}

export default VideoList