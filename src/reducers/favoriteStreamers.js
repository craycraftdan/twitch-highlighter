import { UPDATE_FAV_STREAMERS } from '../actions/constants';

const favoriteStreamers = (state = [], action) => {
    switch(action.type) {
        case UPDATE_FAV_STREAMERS:
            console.log(action.payload)
            console.log(state)
            return {...state, payload: action.payload }
        default: 
            return state
    }
}

export default favoriteStreamers