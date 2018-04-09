import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';

//test begin!
import TrackIndexContainer from './tracks/track_index_container';
import TrackShowContainer from './tracks/track_show_container';
// import EditTrackLyricsContainer from './tracks/edit_track_lyrics_container';
import EditTrackInfoContainer from './tracks/edit_track_info_container';
//test end!

//dummy components for now
import Navbar from './navbar/navbar';
//end of dummy components


const App = () => (
  <div>

    <Modal />

    <header className="main-header">

      <p className="searchbar">Search lyrics & more</p>

      <Link to={`/`}>
        <p className="logo">GENIUS CLONE</p>
      </Link>

      <GreetingContainer />
    </header>

    <Navbar />


    <Switch>
      <Route path="/tracks/:trackId/edit/info" component={ EditTrackInfoContainer } />
      <Route path="/tracks/:trackId" component={ TrackShowContainer } />
      <Route path="/" component={ TrackIndexContainer } />
    </Switch>

  </div>
);

export default App;
