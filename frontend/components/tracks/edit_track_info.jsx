import React from 'react';
import { withRouter } from 'react-router-dom';

class EditTrackInfo extends React.Component {
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

  handleExitModalClick(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.props.history.push(`/tracks/${this.props.track.id}`);
  }

  render() {
    return (

      <div>
        <div className="modal-screen" onClick={(e) => this.handleExitModalClick(e) }></div>

        <form onSubmit={ this.handleSubmit } className="track-info-form">

          <h1 className="title-and-artists">Title and Artists</h1>

          { this.renderErrors() }

          <div className="input-field">
            <label className="info-input-label">Title</label>
            <input type="text"
              value={ this.state.title }
              onChange={ this.update('title') }
              className="not-submit-input"/>
          </div>

          <div className="artist-album-input">

            <div className="input-field">
              <label className="info-input-label">Artist</label>
                <input type="text"
                  value={ this.state.artist }
                  onChange={ this.update('artist') }
                  className="not-submit-input"/>
            </div>

            <div className="input-field">
              <label className="info-input-label">Album</label>
                <input type="text"
                  value={ this.state.album }
                  onChange={ this.update('album') }
                  className="not-submit-input"/>
            </div>

          </div>

          <div className="input-field">
            <label className="info-input-label">Image</label>
            <input type="text"
              value={ this.state.img_url }
              onChange={ this.update('img_url') }
              className="not-submit-input"/>
          </div>

          <input type="submit" className="edit-track-info-submit" value="Save"></input>
        </form>


      </div>
    );
  }


}

export default EditTrackInfo;
