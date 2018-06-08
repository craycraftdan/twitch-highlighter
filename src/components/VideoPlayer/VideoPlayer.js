import React, { Component } from 'react';
import { connect } from 'react-redux';
import disableScroll from 'disable-scroll';
import { CLOSE_VIDEO } from '../../actions/constants';

import {
    Container,
    Modal,
    Close
} from './styles';

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

    closeVideo = () => {
        this.props.closeVideo();
    }

    render() {
       const { modalState } = this.props;
       const { video } = this.props;
        return(
            <Container open={modalState}>
                <Modal>
                    <Close onClick={this.closeVideo}>X</Close>
                    {
                        <iframe 
                            src={video.embed_url} 
                            title={video.title}
                            width='640' 
                            height='360' 
                            frameborder='0' 
                            scrolling='no' 
                            allowfullscreen='true' />
                    }
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
    video: state.appState.activeVideo
});

const mapDispatchToProps = (dispatch) => ({
    closeVideo: () => dispatch({type: CLOSE_VIDEO, payload: null})
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);