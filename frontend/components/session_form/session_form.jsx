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

    $("body").on("click", ".js-modal-open", function(event){
      event.preventDefault();
      $(".modal").addClass("is-open");
    });

    $("body").on("click", ".js-modal-close", function(event){
      event.preventDefault();
      $(".modal").removeClass("is-open");
    });

    return (

    <div class="modal">

      <div class="modal-screen js-modal-close"></div>
        <p class="modal-close-x js-modal-close">&times;</p>
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">

            FORMS ARE WORKING!!! I AM SESSION_FORM.JS {this.props.formType}
            
            <br/>
            Please {this.props.formType} or {this.props.navLink}
            {this.renderErrors()}
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
