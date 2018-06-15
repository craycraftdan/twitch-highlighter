import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {
    Container,
    PlayListBox,
    Chev,
    Thumbnail,
    FadedCover,
    Share,
    PlayIcon,
    IconContainer,
    MainTitle,
    Title,
    Subtitle,
    ChevBoxLeft,
    ChevBoxRight
} from './styles';

const chevron = require('./chevron.svg');
const shareIcon = require('./button-share.svg');
const playIcon = require('./button-play.svg');

class PlayListCreated extends Component {

    openPlaylist = (playlist) => {
        const { push } = this.props.history;
        push(`/PlayListViewer/${playlist._id}`)
    } 

    render() {
        const { videos, title } = this.props 
        return (
            <Container>
                <MainTitle>{title}</MainTitle>
                <ChevBoxLeft>
                    <Chev src={chevron}/>
                </ChevBoxLeft>
                {
                    videos.map(item => {
                        return (
                            
                            <PlayListBox key={item.playlist}>
                                <Thumbnail src={item.videos[0].thumbnails[0].url} />  
                                <FadedCover>
                                    <IconContainer>
                                        <PlayIcon src={playIcon} onClick={() => this.openPlaylist(item)}/>
                                        <Share src={shareIcon} />
                                    </IconContainer>
                                </FadedCover>
                                <Title>{item.playlist}</Title>
                                <Subtitle>{item.videos.length} videos</Subtitle>
                            </PlayListBox>
                        )
                    })
                }
                <ChevBoxRight>
                    <Chev src={chevron} right/>
                </ChevBoxRight>
            </Container>
        )
    }
}



export default withRouter(PlayListCreated)

