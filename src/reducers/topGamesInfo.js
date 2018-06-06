import { GET_TOP_GAMES_INFO, UPDATE_TOP_GAMES_INFO } from '../actions/constants';

const topGamesInfo = (state = [], action) => {
    switch(action.type) {
        case GET_TOP_GAMES_INFO:
            return {...state, games: action.payload }
        case UPDATE_TOP_GAMES_INFO:
            return {...state, games: [...state.games, action.payload] }
        default: 
            return state
    }
}

export default topGamesInfo