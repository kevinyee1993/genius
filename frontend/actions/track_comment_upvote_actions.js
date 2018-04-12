// receive single comment
//all the different api utils

import * as APIUtil from '../util/track_comment_upvotes_api_util';

export const RECEIVE_SINGLE_COMMENT = 'RECEIVE_SINGLE_COMMENT';

export const receiveSingleComment = (comment) => ({
  type: RECEIVE_SINGLE_COMMENT,
  comment
});

export const createUpvote = (commentId, voteValue) => dispatch => (
  APIUtil.createUpvote(commentId, voteValue).then(comment => (
    dispatch(receiveSingleComment(comment))
  ))
);

export const updateUpvote = (upvote) => dispatch => (
  APIUtil.updateUpvote(upvote).then(comment => (
    dispatch(receiveSingleComment(comment))
  ))
);

//destroys upvote from db which should also return a different comment bc the score will be different
export const destroyUpvote = (upvoteId) => dispatch => (
  APIUtil.destroyUpvote(upvoteId).then(comment => (
    dispatch(receiveSingleComment(comment))
  ))
);
