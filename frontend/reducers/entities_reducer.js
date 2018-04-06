import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import track from './track_reducer';


export default combineReducers({
  track,
});
