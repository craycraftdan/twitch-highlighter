import { combineReducers } from 'redux';

import { default as activeStreamer } from './activeStreamer';
import { default as topGamesInfo } from './topGamesInfo';
import { default as favoriteStreamers } from './favoriteStreamers';
import { default as playlist } from './playlist';
import { default as appState } from './appState';

const rootReducer = combineReducers({ 
    appState,
    activeStreamer,
    topGamesInfo,
    favoriteStreamers,
    playlist
});

export default rootReducer