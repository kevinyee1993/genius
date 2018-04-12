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

import { fetchTrackComments, createTrackComment, updateTrackComment, destroyTrackComment }
from './actions/track_comment_actions';
// import { createTrackComment } from './util/track_comments_api_util';

//testing comment upvote api utils
// import { createUpvote, updateUpvote, destroyUpvote } from './util/track_comment_upvotes_api_util';


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
    // createUpvote, updateUpvote, destroyUpvote
    // window.createUpvote = createUpvote;
    // window.updateUpvote = updateUpvote;
    // window.destroyUpvote = destroyUpvote;


    //action tests track comments
      window.fetchTrackComments = fetchTrackComments;
      window.createTrackComment = createTrackComment;
      window.updateTrackCommment = updateTrackComment;
      window.destroyTrackComment = destroyTrackComment;

//END TESTS


  ReactDOM.render(<Root store={ store }/>, root);
});
