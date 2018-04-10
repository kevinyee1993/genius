import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import tracks from './track_reducer';
import annotations from './annotation_reducer';


export default combineReducers({
  tracks,
  annotations
});
