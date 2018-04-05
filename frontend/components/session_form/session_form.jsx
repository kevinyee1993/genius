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

//TODO: CHANGE THIS TO LOOK LIKE GENIUS
render() {

    return (

    <div class="modal">

        <p class="modal-close-x">&times;</p>

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
