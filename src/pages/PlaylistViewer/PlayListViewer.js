import React from 'react';
import { connect } from 'react-redux';
import PlayListCreated from '../../components/PlayListCreated/index';
import { Container, Title } from './styles';

const PlayListViewer = (props) => {
    return(
        <Container>
            <Title>Playlist Browser</Title>
            <PlayListCreated 
                videos={props.playlist}
                title="Trending Playlist"/>
            <PlayListCreated 
                videos={props.playlist}
                title="Your Creations"/>
            <PlayListCreated 
                videos={props.playlist}
                title="Recently Created"/>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    playlist: state.createdPlayList
});

export default connect(mapStateToProps)(PlayListViewer)