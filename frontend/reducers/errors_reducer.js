import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import track from './track_errors_reducer';
import annotation from './annotation_errors_reducer';
import trackComments from './track_comments_errors_reducer';

export default combineReducers({
  session,
  track,
  trackComments,
  annotation
});
