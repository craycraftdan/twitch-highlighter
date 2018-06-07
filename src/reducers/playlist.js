import { 
    ADD_VIDEO_PLAYLIST,
    ADD_TITLE_PLAYLIST,
    REMOVE_VIDEO_PLAYLIST
} from '../actions/constants';


const playlist = (state = { videos: [], playlist: ""}, action) => {
    switch(action.type) {
        case ADD_VIDEO_PLAYLIST:
            return {...state, videos: [...state.videos, action.payload]}
        case ADD_TITLE_PLAYLIST:
            return {...state, playlist: action.payload}
        case REMOVE_VIDEO_PLAYLIST:
        console.log(action.payload )
            return {...state, videos: [...state.videos].filter(video => video.title !== action.payload) }
        default: 
            return state
    }
}

export default playlist