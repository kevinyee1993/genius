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

import GreetingContainer from '../greeting/greeting_container';

import MusicPlayerContainer from '../musicplayer/music_player_container';

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
    window.scrollTo(0, 0);


//want to take away the class which makes its position relative and absolute
//maybe can just make a class that adds the absolute positioning here
//and then take it away once you go to the index page


    // document.getElementsByClassName("heading-image").classList.add('absolute-pos');
    // document.getElementsByClassName("heading-image").classList.add('absolute-pos');

    // document.getElementByClass("MyElement").classList.remove('MyClass');
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.trackId != nextProps.match.params.trackId) {
      this.props.fetchSingleTrack(nextProps.match.params.trackId);
    }
  }


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


        <header className="main-header-show">



          <Link to={`/`}>
            <p className="logo">LYRICS</p>
            <MusicPlayerContainer />
          </Link>


          <GreetingContainer />
        </header>

        <img className="heading-image-show" src="https://images.unsplash.com/photo-1501828983797-9d7f14e0263c?ixlib=rb-0.3.5&s=3954212c2b89ef1d2825c324e08f0e44&auto=format&fit=crop&w=1350&q=80"></img>
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

        <Route path="/tracks/:trackId" component={ CommentIndexContainer } />

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
