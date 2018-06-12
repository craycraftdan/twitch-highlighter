import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Container,
    PlayListBox,
    Chev,
    Thumbnail,
    FadedCover,
    Share,
    PlayIcon,
    IconContainer,
    Title,
    Subtitle,
} from './styles';

const chevron = require('./chevron.svg');
const shareIcon = require('./button-share.svg');
const playIcon = require('./button-play.svg');

class PlayListCreated extends Component {
    render() {
        const { playlist } = this.props 
        console.log(playlist)
        return (
            <Container>
                <Chev src={chevron}/>
                {
                    playlist.map(item => {
                        return (
                            <PlayListBox key={item.playlist}>
                                <Thumbnail src={item.videos[0].thumbnails[0].url} />  
                                <FadedCover>
                                    <IconContainer>
                                        <PlayIcon src={playIcon} />
                                        <Share src={shareIcon} />
                                    </IconContainer>
                                </FadedCover>
                                <Title>{item.playlist}</Title>
                                <Subtitle>{item.videos.length} videos</Subtitle>
                            </PlayListBox>
                        )
                    })
                }
                <Chev src={chevron} right/>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    playlist: state.createdPlayList
});

export default connect(mapStateToProps)(PlayListCreated)

