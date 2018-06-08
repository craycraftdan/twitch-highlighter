import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as Scroll from 'react-scroll';
import StreamerBox from '../../components/StreamerBox/index';
import VideoList from '../../components/VideoLister/index';
import VideoPlayer from '../../components/VideoPlayer/index';

let scroll = Scroll.animateScroll;

const Container = styled.div`
    display: flex;
    margin-top: 60px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 1220px;
    margin-bottom: 60px;

    @media only screen and (max-width: 1650px) {
        max-width: 800px;
    }

    @media only screen and (max-width: 1240px) {
        max-width: 600px;
    }

`

class PlayListBuilder extends Component {

    componentDidUpdate() {
        scroll.scrollTo(0);
    }

    render() {
        return(
            <Container>
                {
                    Object.keys(this.props.activeStreamer).length !== 0
                        ?<StreamerBox streamer={this.props.activeStreamer} />
                        : null
                }
                {
                    Object.keys(this.props.activeStreamer).length !== 0
                        ? <VideoList videos={this.props.activeStreamer.streamer.videos} />
                        : null
                }
                <VideoPlayer />
            </Container>
        )
    }
    
}

const mapStateToProps = (state) => ({
    activeStreamer: state.activeStreamer
});

export default connect(mapStateToProps)(PlayListBuilder)