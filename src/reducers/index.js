import { combineReducers } from 'redux';

import { default as activeStreamer } from './activeStreamer';
import { default as topGamesInfo } from './topGamesInfo';
import { default as favoriteStreamers } from './favoriteStreamers';
import { default as playlist } from './playlist.js'

const rootReducer = combineReducers({ 
    // appState,
    activeStreamer,
    topGamesInfo,
    favoriteStreamers,
    playlist
});

export default rootReducer