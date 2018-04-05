import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);

//just testing a remove errors thunk action creator here
//doesn't take anything, just changes the state to en empty object
//should this be an array though? or just an object,
//trying out empty object first, if error will have to change to
//some array thing
//maybe have this action called in modal.jsx whenever you exit the modal??
//yeah getting errors, need to make sure what this object actually looks like

//OK GOT THIS WORKING NOW JUST NEED TO CALL IT IN THE RIGHT PLACE
//AKA AFTER YOU EXIT A MODAL
export const clearErrors = () => dispatch => (
  dispatch(receiveErrors([]))
);
