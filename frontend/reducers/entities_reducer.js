import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import tracks from './track_reducer';


export default combineReducers({
  tracks,
});
