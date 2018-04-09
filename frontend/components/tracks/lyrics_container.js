import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleTrack, updateTrack, fetchAllTracks } from '../../actions/track_actions';

import Lyrics from './lyrics';

const mapStateToProps = (state, ownProps) => {
  const defaultTrack = { lyrics: '' };
  const track = state.entities.tracks[ownProps.match.params.trackId] || defaultTrack;

  return { track };
};

const mapDispatchToProps = dispatch => ({
  fetchSingleTrack: id => dispatch(fetchSingleTrack(id)),
  updateTrack: track => dispatch(updateTrack({ track })),
  fetchAllTracks: () => dispatch(fetchAllTracks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Lyrics);
