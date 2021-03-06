import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateAnnotationForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.annotation;
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  renderErrors() {
    return(
      <ul>
        { this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="error-messages">
            { error }
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createAnnotation(1,this.state);
  }
  render() {

    return(
        <div>
          <input type="text" autofocus></input>

          <input type="hidden"
            value = { this.props.startIdx }>
          </input>

          <input type="hidden"
            value = { this.props.endIdx }>
          </input>

          <input type="submit" />
        </div>
    );
  }

}

export default CreateAnnotationForm;
