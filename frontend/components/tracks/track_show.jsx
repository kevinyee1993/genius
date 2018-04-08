import React from 'react';

class TrackShow extends React.Component {

  constructor(props) {
    super(props);
  }


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

        <body className="track-lyrics">
          <p>{ this.props.track.lyrics }</p>
        </body>
    </div>
    );
  }
}

export default TrackShow;
