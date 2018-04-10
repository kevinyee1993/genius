import React from 'react';

import login from '../../actions/session_actions';


//new thing is clearErrors that I added into these args
const Greeting = ({ currentUser, logout, openModal, demoLogin, clearErrors }) => {

  const sessionLinks = () => (
    <nav className="login-signup">
      <button onClick={() => openModal('signup')}>Sign Up</button>
      <button onClick={() => openModal('login')}>Sign In</button>
      <button onClick={demoLogin}>Demo</button>
    </nav>
  );

  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">  {currentUser.username}</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return (
    currentUser ?
    personalGreeting(currentUser, logout) :
    sessionLinks()
  );
};

export default Greeting;
