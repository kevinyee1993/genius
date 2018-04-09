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

    let editButtons;

    if(this.props.currentUser && this.props.currentUser.id === this.props.track.author_id) {
      editButtons = (
        <div className="track-show-edit-buttons">
          <Link to={`/tracks/${this.props.track.id}/edit/lyrics`}>Edit Lyrics</Link>
          <Link to={`/tracks/${this.props.track.id}/edit/info`}>Edit Song Facts</Link>
        </div>);
      }

    return(
      <div>

        { editButtons }

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
