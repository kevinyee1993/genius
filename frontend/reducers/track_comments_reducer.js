import merge from 'lodash/merge';

import { RECEIVE_SINGLE_COMMENT, RECEIVE_ALL_COMMENTS, REMOVE_COMMENT } from '../actions/track_comment_actions';

const TrackCommentsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_COMMENTS:
      return merge({}, action.comments);
    case RECEIVE_SINGLE_COMMENT:
      return merge({}, state, {[action.comment.id]: action.comment});
    case REMOVE_COMMENT:
      let newState = merge({}, state);
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  }
};

export default TrackCommentsReducer;
