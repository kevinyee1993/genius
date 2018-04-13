import React from 'react';
import { Link, Route } from 'react-router-dom';

import CreateAnnotationFormContainer from '../annotations/create_annotation_form_container';

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

selectionMade() {
  if(window.getSelection().toString().length > 1) {
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

      let startIdx = window.getSelection().anchorOffset;
      let endIdx  = window.getSelection().focusOffset;
      let selectionText = window.getSelection().toString();

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

      <Route path="/tracks/:trackId/annotations/new"
        render={ () => <CreateAnnotationFormContainer startIdx = {startIdx} endIdx = { endIdx } selectionText={ selectionText } /> }/>

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
