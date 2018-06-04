import { combineReducers } from 'redux';

import { default as  activeStreamer } from './activeStreamer';

const rootReducer = combineReducers({ 
    // appState,
    activeStreamer,
    // favoriteStreamers,
});

export default rootReducer