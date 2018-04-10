import React from 'react';
import { Link } from 'react-router-dom';

class Lyrics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLink: false
    };

  }

  componentDidMount() {
    this.props.fetchAllTracks();
  }

  //just testing out different methods right here
  //this will make the annotation form pop up after you select some text
  //just testing you know
  // mouseUp() {
  //   let selection = window.getSelection();
  //   let link = (<Link to="/">hello</Link>);
  //   console.log(window.getSelection().toString());
  //   if(window.getSelection().toString().length > 1) {
  //     document.execCommand("createLink", false, "/");
  //   }
  // }

//want this function to open up a start annotation button on the side
//which can then redirect to an annotation form
//this function should create or display button
//what if there is always a button somewhere next to the text (depending on where the selection was made)
//this button has a class of hidden
//after you make this selection you change that button's class to a class that displays it
selectionMade() {
  if(window.getSelection().toString().length > 1) {
    console.log(window.getSelection());
    this.setState({ showLink: true });
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


      //ok got this working, now need to get it to link to annotation component and also disappear accordingly
      let annotationLink;

      if(this.state.showLink) {
        annotationLink = (<Link to={`/tracks/${this.props.track.id}/annotations/new`}
          onClick={ () => this.setState({ showLink: false }) }>Annotate Lyric</Link>);
      } else {
        annotationLink = "";
      }
      // <button onClick={() => this.mouseUp()}>Click me to make a link!</button>

      //may not need contentEditable if you figure out how to do
      //contentEditable="true" inside of track-lyrics body tag if need to reset it
    return(
      <div>
        { editButtons }

        { annotationLink }

        <p className="track-lyrics" onMouseUp={ () => this.selectionMade() }>
          {this.props.track.lyrics}
        </p>

      </div>
    );
  }
}

export default Lyrics;

//this displayed the lyrics before
// <body className="track-lyrics" onMouseUp={ () => this.mouseUp() }>
//     {this.props.track.lyrics.split('\n').map((item, key) => {
//       return <p key={key}>{item}<br/></p>
//       })}
// </body>
