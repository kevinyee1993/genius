import React from 'react';


//may not need these, just here to figure out how to render edit lyric component
import { Route, Switch, Link } from 'react-router-dom';

//testing authroutes
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

//component I want to render
import LyricsContainer from './lyrics_container';
import EditTrackLyricsContainer from './edit_track_lyrics_container';
import EditTrackInfoContainer from './edit_track_info_container';
import CommentIndexContainer from './comment_index_container';

//test code here
import CreateAnnotationFormContainer from '../annotations/create_annotation_form_container';
//end test code

class TrackShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllTracks();
    this.props.fetchSingleTrack(this.props.match.params.trackId);
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.trackId != nextProps.match.params.trackId) {
      this.props.fetchSingleTrack(nextProps.match.params.trackId);
    }
  }

  //TODO: DELETE THIS, WAS JUST TESTING HOW TO TEST window.getSelection()
  // testWindow() {
  //   console.log(window.getSelection());
  // }


  //here check if you are on the edit lyrics page and if you are, set the edit
  //lyrics form to be rendered in place of the actual lyrics
  //otherwise just display the lyrics
  //how to check that you are in editing mode or not
  render() {

    if (!this.props.track) return null;
    let album;
    let albumTag;

    if (this.props.track.album) {
      album = `${ this.props.track.album }`;
      albumTag = 'Album ';
    }

    //if no image url is provided by the user, use this default image
    let trackImage;
    if (this.props.track.img_url) {
      trackImage = this.props.track.img_url;
    } else {
      trackImage = "http://i0.kym-cdn.com/photos/images/facebook/000/993/875/084.png";
    }

    //sets the background of the header using html
    let style = {
      backgroundImage: `linear-gradient(rgb(0,0,0,0.7), rgb(0,0,0,0.7)), url(${ trackImage })`,
      backgroundPosition: '0 -185px',
    };

    let editLyricLink;
    let editInfoLink;

    return(
      <div>
        <header className="track-show-header" style={ style }>
          <img src={ trackImage }></img>



          <section className="track-info">
            <h1 className = "show-track-title">{ this.props.track.title }</h1>
            <h2 className = "show-track-artist">{ this.props.track.artist }</h2>

            <div class="album-info">
              <h3 className="album-tag">{albumTag }</h3>
              <h3 className = "show-track-album">{ album }</h3>
            </div>

          </section>
        </header>



        <ProtectedRoute path="/tracks/:trackId/edit/info" component={ EditTrackInfoContainer }/>

        <Switch>
          <ProtectedRoute path="/tracks/:trackId/edit/lyrics" component={ EditTrackLyricsContainer } />
          <Route path="/tracks/:trackId/" component={ LyricsContainer } />
        </Switch>

        <Route exact path="/tracks/:trackId" component={ CommentIndexContainer } />

    </div>
    );


  }
}

export default TrackShow;

//TODO: DELETE THIS LATER, WAS JUST TESTING HOW TO USE THIS FUNCTION
// <button onClick={() => this.testWindow()}> Click me </button>

//strat
//add class to selected annotation after it is successfully saved
//this class will make the paragraph into a link
