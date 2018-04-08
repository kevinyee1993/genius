import React from 'react';
import { withRouter } from 'react-router-dom';

class EditTrackLyrics extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.track;
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateTrack(this.state).then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div>

        <form onSubmit={ this.handleSubmit }>

          <textarea
            value={ this.state.lyrics }
            onChange = { this.update('lyrics') } />

          <input type="submit" value="Save" />

        </form>

      </div>
    );
  }
}

export default EditTrackLyrics;
