import {
    GET_STREAMER_INFO,
    GET_STREAMER_VIDEOS,
    GET_LIVE_STATUS
} from './constants';

import { clientID } from '../keys';

export const getStreamer = (streamerName) => {
    const url = `https://api.twitch.tv/kraken/channels/${streamerName}?client_id=${clientID}`;
    return (dispatch) => {
        fetch(url)
            .then( res => res.json() )
            .then( data => {
                dispatch({ 
                    type: GET_STREAMER_INFO, 
                    payload: {
                        streamer: data.display_name,
                        id: data._id,
                        game: data.game,
                        status: data.status,
                        avatar: data.logo
                    } } ) 
            })
            .catch( err => console.log('err', err) )
    }
}

export const getLiveStatus = (streamerName) => {
    const url = `https://api.twitch.tv/kraken/streams/${streamerName}?client_id=${clientID}`;
    return (dispatch) => {
        fetch(url)
            .then( res => res.json() )
            .then( data => {
                data.stream 
                    ? dispatch({ 
                        type: GET_LIVE_STATUS, 
                        payload: {
                            online: true,
                            viewers: data.stream.viewers
                        } } ) 
                    : dispatch({
                        type: GET_LIVE_STATUS,
                        payload: {
                            online: false,
                            viewers: 0
                        }
                    })
            })
            .catch( err => console.log('err', err) )
    }
}

export const getChannelVideos = (streamerName) => {
    const url = `https://api.twitch.tv/kraken/channels/${streamerName}/videos?client_id=${clientID}`
    return (dispatch) => {
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch({type: GET_STREAMER_VIDEOS, payload: data.videos }))
            .catch( err => console.log('err', err)) 
    }
}