import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const demoUser = {username: "demo", password: "password"};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  demoLogin: () => dispatch(login(demoUser)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
