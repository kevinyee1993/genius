import * as APIUtil from '../util/track_api_util';

export const RECEIVE_SINGLE_TRACK = 'RECEIVE_SINGLE_TRACK';
export const RECEIVE_ALL_TRACKS = 'RECEIVE_ALL_TRACKS';
export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';

export const receiveSingleTrack = (singleTrack) => ({
  type: RECEIVE_SINGLE_TRACK,
  singleTrack
});

export const receiveAllTracks = (tracks) => ({
  type: RECEIVE_ALL_TRACKS,
  tracks
});

export const receiveErrors = errors => ({
  type: RECEIVE_TRACK_ERRORS,
  errors
});

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
