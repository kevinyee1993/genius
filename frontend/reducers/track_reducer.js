import merge from 'lodash/merge';

import { RECEIVE_SINGLE_TRACK, RECEIVE_ALL_TRACKS } from '../actions/track_actions';

//Might need to change the default state after, just leaving it as {} for now


//WAIT what im doing right now with receive single track is adding
//a track to the thing, which I didn't do correctly because need to
//merge it with a new object or whatever yadada mean
const trackReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_TRACKS:
      return merge({}, action.tracks);
    case RECEIVE_SINGLE_TRACK:
      return merge({}, state, {[action.track.id]: action.track});
    default:
      return state;
  }
};

export default trackReducer;
