import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  this.handleSubmit = this.handleSubmit.bind(this);
}

//updates the current local state of username or password
update(field) {
  return e => this.setState({
    [field]: e.currentTarget.value
  });
}

//signs up or logs in the user after submit is pressed
handleSubmit(e) {
  e.preventDefault();
  const user = Object.assign({}, this.state);
  this.props.processForm(user);
}

renderErrors() {
  return(
    <ul>
      { this.props.errors.map((error, i) => (
        <li key={`error-${i}`}>
          { error }
        </li>
      ))}
    </ul>
  );
}


//clear the this.props.errors of all errors
//call renderErrors again
//what datatype is errors?
//call this whenenever user exits modal
//check modal.jsx, can you have more than one action happen for the
//onclick of one event?

//errors is a read only property
//errors is a state so the only way you can change is using an action
//need to create a removeErrors action that changes the state
//if create that action, don't actually need to do anything in this file
//that's a session_action
//wait you do have an action that handles errors called
//receiveErrors(errors) - dispatch this whenever you exit a modal

//below is just tester code - delete this after everything works
// removeErrors() {
//   this.props.errors = [];
//   this.renderErrors();
// }

render() {

    return (

    <div class="modal">

        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">

            <div class="session-form-heading">
              <p>{this.props.formType} TO CONVOGENIUS</p>
            </div>

            <br/>

            <p class="error-messages">{this.renderErrors()}</p>

            <div className="login-form">
              <br/>
              <label>Username:
                  <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                />
              </label>
              <br/>
              <label>Password:
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              </label>
              <br/>
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
          </form>
        </div>

    </div>
    );
  }
}


export default withRouter(SessionForm);
