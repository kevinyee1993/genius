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

// import SplashImageIndex from './tracks/splash-index';
import SplashImageIndex from './tracks/splash-index';
import SplashImageShow from './tracks/splash-show';

//may or may not need this depending on if you use bootstrap
// import Slider from "react-slick";
import Slider from './carousel';


const App = () => (
  <div>

    <Modal />




    <Navbar />


    <Switch>
      <Route path="/tracks/:trackId" component={ TrackShowContainer } />

      <Route path="/tracks/:trackId" render={ () =>
          <div>
            <header className="main-header">



              <Link to={`/`}>
                <p className="logo">LYRICS</p>
              </Link>


              <GreetingContainer />
            </header>
            <SplashImageIndex />
            <TrackShowContainer />
          </div>
      } />


      <Route path="/" render={ () =>
        <div>
          <header className="main-header">



            <Link to={`/`}>
              <p className="logo">LYRICS</p>
            </Link>


            <GreetingContainer />
          </header>
          
          <SplashImageIndex />
          <TrackIndexContainer />
        </div>
      } />

    </Switch>

  </div>
);

export default App;
