import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import tracks from './track_reducer';
import trackComments from './track_comments_reducer';
import trackCommentUpvotes from './track_comment_upvotes_reducer';
import annotations from './annotation_reducer';



export default combineReducers({
  tracks,
  trackComments,
  trackCommentUpvotes,
  annotations
});
