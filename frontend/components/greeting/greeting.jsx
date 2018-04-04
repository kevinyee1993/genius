import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/signup" class="js-modal-open">SIGN UP</Link>
    &nbsp; &nbsp;
    <Link to="/login" class="js-modal-open">SIGN IN</Link>
  </nav>
);

//might want to change this to have the different fb, insta, twitter icons
const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
