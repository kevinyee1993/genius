import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { login, clearErrors } from './actions/session_actions';
import { receiveCurrentUser } from './actions/session_actions';
import { fetchAllTracks, fetchSingleTrack } from './util/track_api_util';
import { receiveSingleTrack, receiveAllTracks, updateTrack } from './actions/track_actions';

//just testing this
import { fetchAllAnnotations, fetchAnnotation, createAnnotation, updateAnnotation, deleteAnnotation}
from './actions/annotation_actions';

import { fetchTrackComments, fetchTrackComment, createTrackComment } from './util/track_comments_api_util';
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
      // window.updateTrack = updateTrack;

    //annotation api util tests
      window.fetchAllAnnotations = fetchAllAnnotations;
      window.fetchAnnotation = fetchAnnotation;
      window.createAnnotation = createAnnotation;
      window.updateAnnotation = updateAnnotation;
      window.deleteAnnotation = deleteAnnotation;
      window.fetchTrackComments = fetchTrackComments;
      window.fetchTrackComment = fetchTrackComment;
      window.createTrackComment = createTrackComment;
    //end annotation api util tests


    //action tests
      window.receiveSingleTrack = receiveSingleTrack;
      window.receiveAllTracks = receiveAllTracks;
      window.updateTrack = updateTrack;

//END TESTS


  ReactDOM.render(<Root store={ store }/>, root);
});
