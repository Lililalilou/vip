import { combineReducers } from 'redux';
import currentTrack from './currentTrack';
import currentSearch from './currentSearch';

export default combineReducers({
  currentTrack,
  currentSearch,
});
