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
            .then(res => res.json())
            .then(data => {
                dispatch({ 
                    type: GET_STREAMER_INFO, 
                    payload: {
                        streamer: data.display_name,
                        id: data._id,
                        game: data.game,
                        status: data.status,
                        avatar: data.logo
                    }}) 
            })
            .catch( err => console.log('err', err) )
    }
}

export const getLiveStatus = (streamerName) => {
    const url = `https://api.twitch.tv/kraken/streams/${streamerName}?client_id=${clientID}`;
    return (dispatch) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
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
            .catch(err => console.log('err', err))
    }
}

export const getChannelVideos = (streamerName) => {
    const url = `https://api.twitch.tv/kraken/channels/${streamerName}/videos?client_id=${clientID}&limit=20`
    return (dispatch) => {
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch({type: GET_STREAMER_VIDEOS, payload: data.videos }))
            .catch(err => console.log('err', err)) 
    }
}

export const getChannelClips = (streamerName) => {
    const url = `https://api.twitch.tv/kraken/clips/top?limit=21&channel=${streamerName}&period=month`
    return (dispatch) => {
        fetch(url, {headers: {"client-id": clientID, "Accept": "application/vnd.twitchtv.v5+json"}})
            .then(res => res.json())
            .then(data => {
                console.log(data)
                let payload = [];
                data.clips.forEach( video => {
                    let vidObj = { 
                        title: video.title, 
                        game: video.game, 
                        thumbnails: [{url: video.thumbnails.medium}], 
                        published_at: video.created_at, 
                        views: video.views, 
                        duration: video.duration,
                        embed_url: video.embed_url,
                        embed_html: video.embed_html
                    }
                    payload.push(vidObj)
                })
                dispatch({type: GET_STREAMER_VIDEOS, payload})
            })
    }
}

export const getChannelUploads = (streamerName) => {
    const url = `https://api.twitch.tv/kraken/channels/${streamerName}/videos?broadcast_type=upload`
    return (dispatch) => {
        fetch(url, {headers: {"client-id": clientID}})
        .then(res => res.json())
        .then(data => {
            console.log(data.videos)
            dispatch({type: GET_STREAMER_VIDEOS, payload: data.videos })
        })
        .catch(err => console.log(err))
    }
}

export const getGameBoxArt = (game) => {
    /* 
        HTTP 429 (Too Many Requests)  => work out how to slow this down
    */
    if(game || game !== "" || game.length > 1 || game !== 'null' || game !== 'undefined') {
        const url = `https://api.twitch.tv/helix/games?name=${game}`
        return fetch(url, {headers: {"client-id": clientID}})
                .then(res => res.json())
                .then(data => {
                    // console.log('URL data. data', data.data, game)
                    if(data.data) {
                        let url = data.data[0].box_art_url !== 'undefined' ? data.data[0].box_art_url.replace("{width}", "40").replace("{height}", "56") : false;
                        return url
                    } else {
                        return Promise.reject(`No boxart! ${game}`)
                    }
                })
                .catch(err => console.log(err)) 
                // Twitch api is limiting the amount of request I can make harshly, so sometimes the box art doesn't load
    } else {
        return Promise.reject(`No boxart! ${game}`)
    }
}