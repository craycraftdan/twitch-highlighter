import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGameBoxArt } from '../../actions/index';
import { UPDATE_TOP_GAMES_INFO } from '../../actions/constants';
import { BoxArt } from './styles';
const noart = require('./404_boxart.jpg');

class GameBoxArt extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: null,
        }
        this.checkMatch = this.checkMatch.bind(this);
    }

    componentDidMount() {
        let matchedGameUrl = this.checkMatch();
        if(matchedGameUrl) {
            this.setState({url: matchedGameUrl})
        } else {
            getGameBoxArt(this.props.game)
                .then( data => {
                    this.setState({url: data ? data : noart })
                })
                .catch( err => console.log(err) )
        }
    }

    checkMatch() {
        let match = false;
        this.props.topGamesInfo.games.forEach(game => {
            if(this.props.game === game.title) {
                match = game.url
            }
        })
        return match
    }

    render() {
        return (
            <BoxArt> 
                <img 
                    src={ this.state.url ? this.state.url : noart } 
                    style={this.props.style}
                    alt="boxart" />
            </BoxArt>
        )
    }

}

const mapStateToProps = (state) => ({
    topGamesInfo: state.topGamesInfo
});

const mapDispatchTopProps = (dispatch) => ({
    updateTopGamesInfo: ({game}) => dispatch({type: UPDATE_TOP_GAMES_INFO, payload: game})
});

export default connect(mapStateToProps, mapDispatchTopProps)(GameBoxArt)