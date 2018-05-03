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
import DummyStories from './dummy_stories/dummy_stories';
//test end!

import CommentIndexContainer from './tracks/comment_index_container';

//dummy components for now
import Navbar from './navbar/navbar';
//end of dummy components

//may or may not need this depending on if you use bootstrap
// import Slider from "react-slick";
import Slider from './carousel';


const App = () => (
  <div>

    <Modal />


    <header className="main-header">



      <Link to={`/`}>
        <p className="logo">LYRICS</p>
      </Link>


      <GreetingContainer />
    </header>

    <Navbar />

    <img className="heading-image" src="https://images.unsplash.com/photo-1501828983797-9d7f14e0263c?ixlib=rb-0.3.5&s=3954212c2b89ef1d2825c324e08f0e44&auto=format&fit=crop&w=1350&q=80"></img>

    <Switch>
      <Route path="/tracks/:trackId" component={ TrackShowContainer } />
    </Switch>

  </div>
);
// <Route path="/" component={ TrackIndexContainer } />

export default App;
