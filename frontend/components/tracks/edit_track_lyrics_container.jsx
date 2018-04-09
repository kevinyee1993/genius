import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleTrack, updateTrack } from '../../actions/track_actions';

//MAYBE NEED TO CHANGE THIS LATER
import EditTrackLyrics from './edit_track_lyrics';



//the state that this edit_track_lyrics component gets is what the
//current track is and what the type of form is
//what to do with this info?

//altered it to just keep track of whatever lyrics there are
//it gets the track based on the url
//will having a nested route affect this at all? getting the url that is
//anyways you get the specific track and then return it
const mapStateToProps = (state, ownProps) => {
  const defaultTrack = { lyrics: '' };
  const track = state.entities.tracks[ownProps.match.params.trackId] || defaultTrack;

  return { track };
};

//this component needs to grab a specific track using ajax request
//it also needs to update a track
//why need both?
//fetchSingleTrack used to fill up the state after mounting so you
//have some data to work with, and then you can update based on whatever
//that state is
const mapDispatchToProps = dispatch => ({
  fetchSingleTrack: id => dispatch(fetchSingleTrack(id)),
  updateTrack: track => dispatch(updateTrack({ track }))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTrackLyrics);
