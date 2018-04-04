import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//just testing this
import { login } from './actions/session_actions';
import { receiveCurrentUser } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

//TESTS
  window.login = login;

  window.receiveCurrentUser = receiveCurrentUser;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
//END TESTS

  ReactDOM.render(<Root store={ store }/>, root);
});
