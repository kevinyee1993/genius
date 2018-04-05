import React from 'react';

import login from '../../actions/session_actions';

const Greeting = ({ currentUser, logout, openModal, demoLogin }) => {

  const sessionLinks = () => (
    <nav className="login-signup">
      <button onClick={() => openModal('login')}>Login</button>
      <button onClick={() => openModal('signup')}>Signup</button>
      <button onClick={demoLogin}>Demo</button>
    </nav>
  );

  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
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
