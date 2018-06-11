import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Filter } from './styles';
import { 
    getStreamer, 
    getLiveStatus, 
    getChannelVideos, 
    getChannelClips, 
    getChannelUploads } from '../../actions/index';
import { CHANGE_FILTER } from '../../actions/constants';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            streamer: "",
            filter: "Clips"
        }
        this.onChange = this.onChange.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.updateFilter = this.updateFilter.bind(this);
        this.validateStreamer = this.validateStreamer.bind(this);
    }

    onChange(e) {
        this.setState({streamer: e.target.value});
    }

    updateFilter(e) {
        const filter= e.target.value;
        this.setState({filter});
        this.props.updateStateFilter({filter})
    }

    validateStreamer() {
        const { streamer } = this.state;
        if(streamer && /^[a-zA-Z0-9][\w]{3,24}$/.test(streamer) ) {
            return true
        } else {
            return false
        }
    }

    onKeyPress(e) {
        const streamer = this.state.streamer;
        if(e.key === 'Enter' && this.validateStreamer()) {
            this.props.getStreamerInfo(streamer);
            this.props.getLiveInfo(streamer);
            if(this.state.filter === 'Highlights') {
                this.props.getStreamerVideos(streamer);
            } else if(this.state.filter === 'Clips') {
                this.props.getStreamerClips(streamer)
            } else {
                this.props.getStreamerUploads(streamer)
            }   
        } 
    }

    render() {
        return(
            <div>
                <Input type="text" onChange={this.onChange} onKeyPress={this.onKeyPress}/>
                <Filter value={this.state.filter} onChange={this.updateFilter} >
                    <option>Highlights</option>
                    <option>Clips</option>
                    <option>Uploads</option>
                </Filter>
            </div>
        )
    }
}

const mapDispatchTopProps = (dispatch) => ({
    getStreamerInfo: (streamer) => dispatch(getStreamer(streamer)),
    getLiveInfo: (streamer) => dispatch(getLiveStatus(streamer)),
    getStreamerVideos: (streamer) => dispatch(getChannelVideos(streamer)),
    getStreamerClips: (streamer) => dispatch(getChannelClips(streamer)),
    getStreamerUploads: (streamer) => dispatch(getChannelUploads(streamer)),
    updateStateFilter: ({filter}) => dispatch({type: CHANGE_FILTER, payload: filter})
});

export default connect(null, mapDispatchTopProps)(Search);