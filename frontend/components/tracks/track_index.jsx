import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';

class TrackIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllTracks();
  }


  //add this image stuff in later!! then have to style it too

  render() {

    let trackNumber = 0;

    const tracks = this.props.tracks.map(track => {
      let trackImage;
      trackNumber += 1;
      if (track.img_url) {
        trackImage = track.img_url;
      } else {
        trackImage = "http://i0.kym-cdn.com/photos/images/facebook/000/993/875/084.png";
      }

      return (

      <Link to={`/tracks/${track.id}`}>
        <section className="track-index-item">
              <p className="track-number">
                {trackNumber}
              </p>

              <img src={ trackImage }></img>

              <section className="title-and-artist">
                <p className="track-title small-title">
                  {track.title}
                </p>

                <p className="track-artist small-artist">
                  {track.artist}
                </p>
            </section>
      </section>
    </Link>

      );
    });

    return(
      <div className="bottom-section">
        <h1 className="track-index-heading">
          <p>Top Songs</p>
          <div className="top-songs-border"></div>
         </h1>
        <h1>{ tracks }</h1>
      </div>
    );
  }
}

export default TrackIndex;
