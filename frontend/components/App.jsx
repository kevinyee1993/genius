import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';

//NEED TO MAKE ROUTES TO SHOW TRACK CONTAINER OR WHATEVER FEEL ME
import TrackShowContainer from './tracks/track_show_container';
// import TrackShow from './tracks/track_show';

//dummy components for now
import Navbar from './navbar/navbar';
//end of dummy components

import { Route } from 'react-router-dom';


//need to add route here to show the TrackIndexContainer
const App = () => (
  <div>

    <Modal />

    <header>

      <p class="searchbar">Search lyrics & more</p>
      <p class="logo">I am the app component</p>
      <GreetingContainer />
    </header>

    <Navbar />

    <TrackShowContainer />
  </div>
);

export default App;
