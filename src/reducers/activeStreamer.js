import { 
    GET_STREAMER_INFO, 
    GET_LIVE_STATUS,
    GET_STREAMER_VIDEOS } from '../actions/constants';


const activeStreamer = (state = [], action) => {
    switch(action.type) {
        case GET_STREAMER_INFO:
            return {...state, streamer: action.payload }
        case GET_LIVE_STATUS:
            return {...state, streamer:  {...state.streamer, online: action.payload.online, viewers: action.payload.viewers } }
        case GET_STREAMER_VIDEOS: 
            return {...state, streamer: {...state.streamer, videos: action.payload } }
        default: 
            return state
    }
}

export default activeStreamer