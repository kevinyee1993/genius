import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import entities from './entities_reducer';
import tracks from './track_reducer';
import ui from './ui_reducer';

export default combineReducers({
  entities,
  errors: errorsReducer,
  session: sessionReducer,
  tracks: tracks,
  ui: ui
});
