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
        /* randomly delaying the request to help with twitchs API limits */
        /* Also storing a lot of the most popular games in state here so it only has to reach out to twitch for less common titles */
        /* May move this logic to redux for the start of the app, also might build it off the top 50 games on twitch at the time */
        let matchedGameUrl = this.checkMatch();
        if(matchedGameUrl) {
            this.setState({url: matchedGameUrl})
        } else {
            getGameBoxArt(this.props.game)
                .then( data => {
                    this.setState({url: data ? data : noart })
                    // This doesn't work because all of the GameBoxArt components render at the same time
                    // Not the end of the world but would be cool to figure out how to work this in
                    // this.props.updateTopGamesInfo({game: {
                    //     title: this.props.game,
                    //     url: data ? data : noart
                    // }  
                    // });
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
                    style={{width: '40px', height: '56px'}}
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