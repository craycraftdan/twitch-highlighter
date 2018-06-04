import React, { Component } from 'react';

import { getGameBoxArt } from '../../actions/index';

import { BoxArt } from './styles';

const noart = require('./noart.png');

class GameBoxArt extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: null,
            games: [
                { title: "Fortnite", url: "https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-40x56.jpg" },
                { title: "PLAYERUNKNOWN'S BATTLEGROUNDS", url: "https://static-cdn.jtvnw.net/ttv-boxart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-40x56.jpg" },
                { title: "League of Legends", url: "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-40x56.jpg" },
                { title: "IRL", url: "https://static-cdn.jtvnw.net/ttv-boxart/IRL-40x56.jpg" },
                { title: "Talk Shows", url: "https://static-cdn.jtvnw.net/ttv-boxart/Talk%20Shows-40x56.jpg" },
                { title: "Dota 2", url: "https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-40x56.jpg" },
                { title: "Hearthstone", url: "https://static-cdn.jtvnw.net/ttv-boxart/Hearthstone-40x56.jpg" },
                { title: "Overwatch", url: "https://static-cdn.jtvnw.net/ttv-boxart/Overwatch-40x56.jpg" },
                { title: "Counter-Strike: Global Offensive", url: "https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-40x56.jpg" },
                { title: "Grand Theft Auto V", url: "https://static-cdn.jtvnw.net/ttv-boxart/Grand%20Theft%20Auto%20V-40x56.jpg" },
                { title: "World of Warcraft", url: "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-40x56.jpg" },
                { title: "Creative", url: "https://static-cdn.jtvnw.net/ttv-boxart/Creative-40x56.jpg" },
                { title: "Tom Clancy's Rainbow Six Siege", url: "https://static-cdn.jtvnw.net/ttv-boxart/Tom%20Clancy%27s%20Rainbow%20Six:%20Siege-40x56.jpg" },
                { title: "RuneScape", url: "https://static-cdn.jtvnw.net/ttv-boxart/RuneScape-40x56.jpg" },
                { title: "Minecraft", url: "https://static-cdn.jtvnw.net/ttv-boxart/Minecraft-40x56.jpg" },
            ]
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
            console.log('Called API for: ' + this.props.game)
            const delay = Math.floor(Math.random() * 1200);
            setTimeout( () => {
                getGameBoxArt(this.props.game)
                .then( data => this.setState({url: data ? data : noart }) )
                .catch( err => console.log(err) )
            }, delay)
        }
    }

    checkMatch() {
        let match = false;
        this.state.games.forEach(game => {
            if(this.props.game === game.title) {
                match = game.url
            }
        })
        return match
    }

    render() {
        return (
            <BoxArt> 
                <img src={ this.state.url ? this.state.url : noart } alt="boxart" />
            </BoxArt>
        )
    }

}

export default GameBoxArt