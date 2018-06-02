import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Input, Filter } from './styles';

import { getStreamer, getLiveStatus, getChannelVideos } from '../../actions/index';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            streamer: ""
        }
        this.onChange = this.onChange.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    onChange(e) {
        this.setState({streamer: e.target.value});
    }

    onKeyPress(e) {
        const streamer = this.state.streamer;
        if(e.key === 'Enter') {
            this.props.getStreamerInfo(streamer);
            this.props.getLiveInfo(streamer);
            this.props.getStreamerVideos(streamer);
        } 
    }

    render() {
        return(
            <div>
                <Input type="text" onChange={this.onChange} onKeyPress={this.onKeyPress}/>
                <Filter>
                    <option>Highlights</option>
                    <option>Clips</option>
                    <option>Uploads</option>
                </Filter>
            </div>
        )
    }
}

const mapDispatchTopProps = (dispatch) => ({
    getStreamerInfo: (streamer) => dispatch( getStreamer(streamer) ),
    getLiveInfo: (streamer) => dispatch( getLiveStatus(streamer) ),
    getStreamerVideos: (streamer) => dispatch( getChannelVideos(streamer) )
});

export default connect(null, mapDispatchTopProps)(Search);