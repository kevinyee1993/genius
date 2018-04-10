import React from 'react';
import { withRouter, Link } from 'react-router-dom';

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
    this.props.updateTrack(this.state).then(() =>
    this.props.history.push(`/tracks/${this.props.track.id}`));
  }


  render() {
    return (
      <div>


        <form onSubmit={ this.handleSubmit } className="edit-track-lyrics-form">
          <div className="track-info-submit-cancel">
            <input type="submit" value="Save" className="edit-track-lyrics-submit"/>
            <Link to={`/tracks/${this.props.track.id}`}>Cancel</Link>
          </div>

          { this.renderErrors() }

          <textarea
            value={ this.state.lyrics }
            onChange = { this.update('lyrics') }
            className="lyric-field"/>

          <div className="track-info-submit-cancel">
            <input type="submit" value="Save" className="edit-track-lyrics-submit"/>
            <Link to={`/tracks/${this.props.track.id}`}>Cancel</Link>
          </div>
        </form>

      </div>
    );
  }
}

export default EditTrackLyrics;
