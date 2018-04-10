import React from 'react';
import { Link } from 'react-router-dom';

class Lyrics extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllTracks();
  }

  //just testing out different methods right here
  //this will make the annotation form pop up after you select some text
  //just testing you know
  mouseUp() {
    let selection = window.getSelection();
    let link = (<Link to="/">{selection}</Link>);
    console.log(window.getSelection().toString());
    if(window.getSelection().toString().length > 1) {
      document.execCommand("createLink", false, "https://www.google.com/");
    }
  }

  render() {

    let editButtons;

    //The edit buttons are empty and do not show up if the current user
    //is not the user who created the track
    if(this.props.currentUser && this.props.currentUser.id === this.props.track.author_id) {
      editButtons = (
        <div className="track-show-edit-buttons">
          <Link to={`/tracks/${this.props.track.id}/edit/lyrics`}>Edit Lyrics</Link>
          <Link to={`/tracks/${this.props.track.id}/edit/info`}>Edit Song Facts</Link>
        </div>);
      }

    return(
      <div onMouseUp={this.mouseUp}>

        { editButtons }

        <body className="track-lyrics" contentEditable="true">
            {this.props.track.lyrics.split('\n').map((item, key) => {
              return <span key={key}>{item}<br/></span>
              })}
        </body>
      </div>
    );
  }
}

export default Lyrics;
