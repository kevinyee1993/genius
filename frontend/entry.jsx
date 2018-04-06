import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//just testing this
import { login, clearErrors } from './actions/session_actions';
import { receiveCurrentUser } from './actions/session_actions';
import { createTrack, fetchAllTracks, fetchSingleTrack } from './util/track_api_util';

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
window.createTrack = createTrack;
window.fetchAllTracks = fetchAllTracks;
window.fetchSingleTrack = fetchSingleTrack;

//END TESTS
  ReactDOM.render(<Root store={ store }/>, root);
});
