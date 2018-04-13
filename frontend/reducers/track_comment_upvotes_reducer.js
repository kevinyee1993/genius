import merge from 'lodash/merge';
import { RECEIVE_UPVOTE, RECEIVE_UPVOTES, REMOVE_UPVOTE } from '../actions/track_comment_upvote_actions';

const TrackCommentUpvotesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_UPVOTES:
      return merge({}, action.upvotes);
    case RECEIVE_UPVOTE:
      return merge({}, state, {[action.upvote.id]: action.upvote});
    case REMOVE_UPVOTE:
      let newState = merge({}, state);
      delete newState[action.upvoteId];
      return newState;
    default:
      return state;
  }
};

export default TrackCommentUpvotesReducer;
