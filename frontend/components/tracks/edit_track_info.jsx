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

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateTrack(this.state).then(() => this.props.history.push('/'));
  }

  handleExitModalClick(e) {
    e.preventDefault();
    this.props.history.push(`/tracks/${this.props.track.id}`);
  }

  render() {
    return (

      <div>
        <div className="modal-screen" onClick={(e) => this.handleExitModalClick(e) }></div>

        <form onSubmit={ this.handleSubmit } className="track-info-form">
          <h1 className="title-and-artists">Title and Artists</h1>

          <label>Title
            <input type="text"
              value={ this.state.title }
              onChange={ this.update('title') } />
          </label>

          <label>Artist
            <input type="text"
              value={ this.state.artist }
              onChange={ this.update('artist') }/>
          </label>

          <label>Album
            <input type="text"
              value={ this.state.album }
              onChange={ this.update('album') }/>
          </label>

          <label>Image
            <input type="text"
              value={ this.state.img_url }
              onChange={ this.update('img_url') }/>
          </label>

          <input type="submit"></input>
        </form>


      </div>
    );
  }


}

export default EditTrackInfo;
