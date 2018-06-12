import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Container,
    PlayListBox,
    Chev,
    Thumbnail,
    FadedCover
} from './styles';

const chevron = require('./chevron.svg');

class PlayListCreated extends Component {
    render() {
        const { playlist } = this.props 
        console.log(playlist)
        return (
            <Container>
                <Chev src={chevron}/>
                {
                    playlist.map(item => {
                        return (
                            <PlayListBox key={item.playlist}>
                                <FadedCover />
                                <Thumbnail src={item.videos[0].thumbnails[0].url} />  
                            </PlayListBox>
                        )
                    })
                }
                <Chev src={chevron} right/>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    playlist: state.createdPlayList
});

export default connect(mapStateToProps)(PlayListCreated)

