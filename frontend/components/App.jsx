import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';

import { Route } from 'react-router-dom';

const App = () => (
  <div>

    <Modal />

    <header>

      <p class="searchbar">Search lyrics & more</p>
      <p class="logo">I am the app component</p>
      <GreetingContainer />
    </header>
    
  </div>
);

export default App;
