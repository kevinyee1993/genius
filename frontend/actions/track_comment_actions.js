import * as APIUtil from '../util/track_comments_api_util';

export const RECEIVE_SINGLE_COMMENT = 'RECEIVE_SINGLE_COMMENT';
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';


export const receiveSingleComment = (comment) => ({
  type: RECEIVE_SINGLE_COMMENT,
  comment
});

export const receiveAllComments = (comments) => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

export const removeComment = commentId => ({
  type: REMOVE_POST,
  commentId
});


export const receiveErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

export const fetchTrackComments = (trackId) => dispatch => (
  APIUtil.fetchTrackComments(trackId).then(comments => (
    dispatch(receiveAllComments(comments))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchTrackComment = (trackId, commentId) => dispatch => (
  APIUtil.fetchTrackComment(trackId, commentId).then(comment => (
    dispatch(receiveSingleComment(comment))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const createTrackComment = (trackId, comment) => dispatch => (
  APIUtil.createTrackComment(trackId, comment).then(comment => (
    dispatch(receiveSingleComment(comment))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updateTrackComment = (comment) => dispatch => (
  APIUtil.updateTrackComment(comment).then(comment => (
    dispatch(receiveSingleComment(comment))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const destroyTrackComment = (trackId, commentId) => dispatch => (
  APIUtil.destroyTrackComment(trackId, commentId).then(comment => (
    dispatch(removeComment(commentId))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
