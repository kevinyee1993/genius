// receive single comment
//all the different api utils

import * as APIUtil from '../util/track_comment_upvotes_api_util';

// export const RECEIVE_SINGLE_COMMENT = 'RECEIVE_SINGLE_COMMENT';

export const RECEIVE_UPVOTE = 'RECEIVE_UPVOTE';
export const RECEIVE_UPVOTES = 'RECEIVE_UPVOTES';
export const REMOVE_UPVOTE = 'REMOVE_UPVOTE';


// export const receiveSingleComment = (comment) => ({
//   type: RECEIVE_SINGLE_COMMENT,
//   comment
// });

export const receiveUpvote = (upvote) => ({
  type: RECEIVE_UPVOTE,
  upvote
});

export const receiveUpvotes = (upvotes) => ({
  type: RECEIVE_UPVOTES,
  upvotes
});

export const removeUpvote = (upvoteId) => ({
  type: REMOVE_UPVOTE,
  upvoteId
});

export const fetchUpvotes = () => dispatch => (
  APIUtil.fetchUpvotes().then(upvotes => (
    dispatch(receiveUpvotes(upvotes)))
  ));

export const createUpvote = (commentId, voteValue) => dispatch => (
  APIUtil.createUpvote(commentId, voteValue).then(upvote => (
    dispatch(receiveUpvote(upvote))
  ))
);

export const updateUpvote = (upvote) => dispatch => (
  APIUtil.updateUpvote(upvote).then(upvote => (
    dispatch(receiveUpvote(upvote))
  ))
);

//destroys upvote from db which should also return a different comment bc the score will be different
export const destroyUpvote = (upvoteId) => dispatch => (
  APIUtil.destroyUpvote(upvoteId).then(upvote => (
    dispatch(removeUpvote(upvoteId))
  ))
);

// export const destroyUpvote = (upvoteId) => dispatch => (
//   APIUtil.destroyUpvote(upvoteId).then(comment => (
//     dispatch(receiveSingleComment(comment))
//   ))
// );
