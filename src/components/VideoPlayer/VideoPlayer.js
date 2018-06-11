import React, { Component } from 'react';
import { connect } from 'react-redux';
import disableScroll from 'disable-scroll';
import { CLOSE_VIDEO, ADD_VIDEO_PLAYLIST } from '../../actions/constants';
import {
    Container,
    Modal,
    Buttons,
    AddButton,
    CloseButton,
    SocialBox,
    BottomContainer,
    SocialIcon,
    Video
} from './styles';
const CloseOpen = require('./button-add.svg');
const insta     = require('./logo-instagram.svg');
const fb        = require('./logo-facebook.svg');
const share     = require('./logo-share.svg');
const twitter   = require('./logo-twitter.svg');


class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.modalState
        }
    }

    componentDidUpdate() {
        this.props.modalState ? disableScroll.on() : disableScroll.off() 
    }

    checkIfVideoExist = () => {
        const { video } = this.props;
        let match = false;
        this.props.videos.forEach(item => {
            video.title === item.title && (match = true)
        });
        return match
    }

    addVideo = () => {
        const { video } = this.props;
        if(!this.checkIfVideoExist()) {
            this.props.addVideo({video})
            this.closeVideo()
        }
    }

    closeVideo = () => {
        this.props.closeVideo();
    }

    render() {
       const { modalState } = this.props;
       const { video } = this.props;
        return(
            <Container open={modalState}>
                <Modal>
                    <Buttons>
                        <AddButton 
                            onClick={this.addVideo}
                            src={CloseOpen} />
                        <CloseButton 
                            onClick={this.closeVideo}
                            src={CloseOpen} />
                    </Buttons>
                    {   
                        <Video>
                            <iframe
                                src={video.embed_url ? video.embed_url : ""} 
                                title={video.title}
                                height="360"
                                width="640"
                                frameBorder="0"
                                scrolling="no"
                                allowFullScreen="true">
                            </iframe>
                        </Video>
                    }
                    <BottomContainer>
                        <SocialBox>
                            <SocialIcon src={share} />
                            <SocialIcon src={twitter} />
                            <SocialIcon src={insta} />
                            <SocialIcon src={fb} />
                        </SocialBox>
                    </BottomContainer>
                </Modal>
            </Container>
        )
    }
};

VideoPlayer.defaultProps = {
    open: false
};

const mapStateToProps = (state) => ({
    modalState: state.appState.modal,
    video: state.appState.activeVideo,
    videos: state.playlist.videos,
    topVideos: state.topGamesInfo.games
});

const mapDispatchToProps = (dispatch) => ({
    closeVideo: () => dispatch({type: CLOSE_VIDEO, payload: null}),
    addVideo: ({video}) => dispatch({type: ADD_VIDEO_PLAYLIST, payload: video})
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);