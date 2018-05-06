import React from 'react';
import { connect } from 'react-redux';
import MusicPlayer from './music_player';
import { withRouter } from 'react-router-dom';

import { fetchSingleTrack, updateTrack, fetchAllTracks } from '../../actions/track_actions';

//states you want to map to prop are the state of the current track
//will add a new table to that to have some type of aws url that you
//can get the song from or whatever whatever

const mapStateToProps = (state, ownProps) => {

  //need to get this working, not for some reason
  // const track = state.entities.tracks[ownProps.match.params.trackId];
  const track = state.entities.tracks[ownProps.match.params.trackId].album;

  // const track = state.entities.tracks[1].album;
  // const track = state.entities.annotations;


  //will create new table in the db to add song, this is where you get it
  // const track = state.entities.tracks[ownProps.match.params.trackId].song;



  // const currentUser = {currentUser: state.session.currentUser};

  // return { track, currentUser: state.session.currentUser };
  return { track };
};


//don't think this will need a dispatch because doesn't actually have
//to change any state, will just use the state that is
const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MusicPlayer));
