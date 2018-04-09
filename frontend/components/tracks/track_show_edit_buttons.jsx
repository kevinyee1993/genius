import React from 'react';

class TrackShowEditButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllTracks();
  }

  render() {
    return (
    <div className="track-show-edit-buttons">
      <Link to={`/tracks/${this.props.track.id}/edit/lyrics`}>Edit Lyrics</Link>
      <Link to={`/tracks/${this.props.track.id}/edit/info`}>Edit Song Facts</Link>
    </div>
    );
  }

}

export default TrackShowEditButtons;

//TODO: DELETE THESE ONCE YOU FIGURE OUT HOW TO SHOW THE BUTTONS CORRECTLY!!!
