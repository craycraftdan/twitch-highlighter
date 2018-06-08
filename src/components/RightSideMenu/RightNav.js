import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RightNavContainer } from './styles';
import PlayListTitler from '../PlaylistTitler/index';
import PlayListVideos from '../PlayListVideos/index';

class RightNav extends Component {

    render() {
        const { playlist } = this.props;
        return(
            <RightNavContainer>
                {
                    (!playlist.length) 
                        ? <PlayListTitler />
                        : <PlayListVideos />
                }
            </RightNavContainer>
        )
    }
}

export const mapStateToProps = (state) => ({
    playlist: state.playlist.playlist
});



export default connect(mapStateToProps)(RightNav)