import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <header>

      <p class="searchbar">Search lyrics & more</p>
      <p class="logo">I am the app component</p>
      <GreetingContainer />
    </header>

    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />

  </div>
);

export default App;
