import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//just testing this
import { login, clearErrors } from './actions/session_actions';
import { receiveCurrentUser } from './actions/session_actions';
import { fetchAllTracks, fetchSingleTrack, updateTrack } from './util/track_api_util';
import { receiveSingleTrack, receiveAllTracks } from './actions/track_actions';
//end of testing imports


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

//TESTS
    //creating store
      window.getState = store.getState;
      window.dispatch = store.dispatch;

    //api util tests
      window.fetchAllTracks = fetchAllTracks;
      window.fetchSingleTrack = fetchSingleTrack;
      window.updateTrack = updateTrack;

    //action tests
      window.receiveSingleTrack = receiveSingleTrack;
      window.receiveAllTracks = receiveAllTracks;
      // window.updateTrack = updateTrack;

//END TESTS


  ReactDOM.render(<Root store={ store }/>, root);
});
