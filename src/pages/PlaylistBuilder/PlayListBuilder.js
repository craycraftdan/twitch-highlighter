import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import StreamerBox from '../../components/StreamerBox/index';
import VideoList from '../../components/VideoLister/index';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 1220px;

    @media only screen and (max-width: 1650px) {
        max-width: 800px;
    }

    @media only screen and (max-width: 1240px) {
        max-width: 600px;
    }

`

class PlayListBuilder extends Component {

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
            </Container>
        )
    }
    
}

const mapStateToProps = (state) => ({
    activeStreamer: state.activeStreamer
});

export default connect(mapStateToProps)(PlayListBuilder)