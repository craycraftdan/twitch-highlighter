import {    
    UPDATE_MODAL_STATE, 
    UPDATE_ACTIVE_VIDEO,
    CLOSE_VIDEO,
    VIDEO_DRAGGING,
    CHANGE_FILTER  
} from '../actions/constants';

const appState = (state = {modal: false, activeVideo: {} }, action) => {
    switch(action.type) {
        case UPDATE_MODAL_STATE:
            return {...state, modal: action.payload }
        case UPDATE_ACTIVE_VIDEO: 
            return {...state, activeVideo: action.payload}
        case VIDEO_DRAGGING:
            return {...state, videoDragging: action.payload }
        case CLOSE_VIDEO: 
            return state = {modal: false, activeVideo: {} }
        case CHANGE_FILTER:
            return {...state, filter: action.payload}
        default: 
            return state
    }
}

export default appState