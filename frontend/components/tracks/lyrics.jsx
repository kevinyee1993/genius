import React from 'react';
import { Link } from 'react-router-dom';

class Lyrics extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllTracks();
  }

  render() {
    return(
      <div>
        <div className="track-show-edit-buttons">
          <Link to={`/tracks/${this.props.track.id}/edit/lyrics`}>Edit Lyrics</Link>
          <Link to={`/tracks/${this.props.track.id}/edit/info`}>Edit Info</Link>
        </div>

        <body className="track-lyrics">
            {this.props.track.lyrics.split('\n').map((item, key) => {
              return <span key={key}>{item}<br/></span>
              })}
        </body>
      </div>
    );
  }
}

export default Lyrics;
