import { connect } from 'react-redux';
import { logout, login, clearErrors } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const demoUser = {username: "demo", password: "password"};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  demoLogin: () => dispatch(login(demoUser)),
  clearErrors: () => dispatch(clearErrors()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);

//strat: import clearErrors from session_actions and then put it in
//mapDispatchToProps
//call it within the component aka greeting.jsx??
//wherever you close the modal from I'm not sure where that is right now
