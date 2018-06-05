import { combineReducers } from 'redux';

import { default as  activeStreamer } from './activeStreamer';
import { default as topGamesInfo } from './topGamesInfo';
import { default as favoriteStreamers } from './favoriteStreamers';

const rootReducer = combineReducers({ 
    // appState,
    activeStreamer,
    topGamesInfo,
    favoriteStreamers
});

export default rootReducer