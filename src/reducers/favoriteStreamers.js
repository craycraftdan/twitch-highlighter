import {    
    UPDATE_FAV_STREAMERS,   
    REMOVE_FAV_STREAMER } from '../actions/constants';

const favoriteStreamers = (state = { streamerList: []}, action) => {
    switch(action.type) {
        case UPDATE_FAV_STREAMERS:
            return {...state, streamerList: [...state.streamerList, action.payload] }
        case REMOVE_FAV_STREAMER:
            return {...state, streamerList: [...state.streamerList].filter(streamer => streamer.streamer !== action.payload.streamer) }
        default: 
            return state
    }
}

export default favoriteStreamers