import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';

//test begin!
import TrackIndexContainer from './tracks/track_index_container';
//test end!

//dummy components for now
import Navbar from './navbar/navbar';
//end of dummy components

import { Route } from 'react-router-dom';


const App = () => (
  <div>

    <Modal />

    <header>

      <p class="searchbar">Search lyrics & more</p>
      <p class="logo">I am the app component</p>
      <GreetingContainer />
    </header>

    <Navbar />

    <TrackIndexContainer />
  </div>
);

export default App;
