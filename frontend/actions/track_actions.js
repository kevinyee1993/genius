import * as APIUtil from '../util/track_api_util';

export const RECEIVE_SINGLE_TRACK = 'RECEIVE_SINGLE_TRACK';
export const RECEIVE_ALL_TRACKS = 'RECEIVE_ALL_TRACKS';
export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';

export const receiveSingleTrack = (track) => ({
  type: RECEIVE_SINGLE_TRACK,
  track
});

export const receiveAllTracks = (tracks) => ({
  type: RECEIVE_ALL_TRACKS,
  tracks
});

export const receiveErrors = errors => ({
  type: RECEIVE_TRACK_ERRORS,
  errors
});

//implement this later because users do not need to create the tracks yet
//maybe just seed it for now and give them the functionality for it later
export const createTrack = (track) => dispatch => (
  APIUtil.createTrack(track).then(track => (
    dispatch(receiveSingleTrack(track))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchAllTracks = () => dispatch => (
  APIUtil.fetchAllTracks().then(tracks => (
    dispatch(receiveAllTracks(tracks))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchSingleTrack = (id) => dispatch => (
  APIUtil.fetchSingleTrack(id).then(track => (
    dispatch(receiveSingleTrack(track))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updateTrack = (track) => dispatch => (
  APIUtil.updateTrack(track).then(track => (
    dispatch(receiveSingleTrack(track))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const clearErrors = () => dispatch => (
  dispatch(receiveErrors([]))
);
