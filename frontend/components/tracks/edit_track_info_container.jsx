import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleTrack, updateTrack, clearErrors } from '../../actions/track_actions';

import EditTrackInfo from './edit_track_info';

const mapStateToProps = (state, ownProps) => {
  const defaultTrack = { title: '', artist: '', album: '' };

  const track = state.entities.tracks[ownProps.match.params.trackId] || defaultTrack;

  return { track, errors: state.errors.track };
};

const mapDispatchToProps = dispatch => ({
  fetchSingleTrack: id => dispatch(fetchSingleTrack(id)),
  updateTrack: track => dispatch(updateTrack({ track })),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTrackInfo);
