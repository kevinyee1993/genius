import React from 'react';


//may not need these, just here to figure out how to render edit lyric component
import { Route, Switch, Link } from 'react-router-dom';

//component I want to render
import LyricsContainer from './lyrics_container';

import EditTrackLyricsContainer from './edit_track_lyrics_container';

class TrackShow extends React.Component {

  constructor(props) {
    super(props);
  }

//TODO: something might be wrong here because after refreshing,
//the page becomes empty and the state resets
  componentDidMount() {
    this.props.fetchAllTracks();
    // this.props.fetchSingleTrack(this.props.match.params.trackId);
  }


  //MAYBE PUT THIS BACK IN LATER????!?
  //if the next url id is not equal to the current url id,
  //re-render the page with the new information

  componentWillReceiveProps(nextProps) {
    if(this.props.track.id != nextProps.match.params.trackId) {
      this.props.fetchSingleTrack(nextProps.match.params.trackId);
    }
  }



  //here check if you are on the edit lyrics page and if you are, set the edit
  //lyrics form to be rendered in place of the actual lyrics
  //otherwise just display the lyrics
  //how to check that you are in editing mode or not
  render() {
    let album;
    let albumTag;
    if (this.props.track.album) {
      album = `${ this.props.track.album }`;
      albumTag = 'Album ';
    }

    //if no image url is provided by the user, use this default image
    let trackImage;
    if (this.props.track.img_url) {
      trackImage = `${ this.props.track.image_url }`;
    } else {
      trackImage = "http://i0.kym-cdn.com/photos/images/facebook/000/993/875/084.png";
    }

    //sets the background of the header using html
    let style = {
      backgroundImage: `linear-gradient(rgb(0,0,0,0.7), rgb(0,0,0,0.7)), url(${ trackImage })`,
      backgroundPosition: '0 -70px',
    };
    //
    // let showLyric = (
    //   <body className="track-lyrics">
    //     <p>{ this.props.track.lyrics }</p>
    //   </body>);


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

        <Switch>
          <Route path="/tracks/:trackId/edit/lyrics" component={ EditTrackLyricsContainer } />
          <Route path="/tracks/:trackId/" component={ LyricsContainer } />
        </Switch>
    </div>
    );


  }
}

export default TrackShow;
