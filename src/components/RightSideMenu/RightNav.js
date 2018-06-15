import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PlayListTitler from '../PlaylistTitler/index';
import PlayListVideos from '../PlayListVideos/index';
import { RightNavContainer, Title, Divider, Info } from './styles';

class RightNav extends Component {


    renderRightNav = () => {
        const { playlist } = this.props;
        const path = this.props.history.location.pathname;
        if(path === '/PlayListBuilder' || path === '/') {
            return (
                (!playlist.length) 
                    ? <PlayListTitler />
                    : <PlayListVideos />
            )
        } else if(path === '/PlayListViewer') {
            return (
                <div>
                    <Title>Playlist</Title>
                    <Divider />
                    <Info>
                    Select a playlist to start viewing it's contents and watching videos!
                    </Info>
                </div>
            )
        }
    }


    render() {
        return(
            <RightNavContainer>
                {
                    this.renderRightNav()
                }
            </RightNavContainer>
        )
    }
}

export const mapStateToProps = (state) => ({
    playlist: state.playlist.playlist
});



export default withRouter(connect(mapStateToProps)(RightNav))