import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleTrack, updateTrack } from '../../actions/track_actions';

import EditTrackInfo from './edit_track_info';

const mapStateToProps = (state, ownProps) => {
  const defaultTrack = { title: '', artist: '', album: '' };

  const track = state.entities.tracks[ownProps.match.params.trackId] || defaultTrack;

  return { track };
};

const mapDispatchToProps = dispatch => ({
  fetchSingleTrack: id => dispatch(fetchSingleTrack(id)),
  updateTrack: track => dispatch(updateTrack({ track }))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTrackInfo);
