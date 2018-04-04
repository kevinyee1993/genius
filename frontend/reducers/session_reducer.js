import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _nullUser = Object.freeze({ currentUser: null });


//ACTION MAY NOT BE GETTING PASSED INTO THE REDUCER?!?!?!?!
const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, { currentUser });
    default:
      //return state;
      //doing this bottom return just for testing
      return {type: action.type, body: action.currentUser};
  }
};

export default sessionReducer;

//store dispatches action
//reducers get it
//depending on type of action, they return a different object as the state
