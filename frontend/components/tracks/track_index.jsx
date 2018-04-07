import React from 'react';
import { Link } from 'react-router-dom';

class TrackIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllTracks();
  }


  //add this image stuff in later!! then have to style it too
  // <img src="https://s.abcnews.com/images/Lifestyle/puppy-ht-3-er-170907_4x3_992.jpg"></img>

  render() {
    const tracks = this.props.tracks.map(track => {
      return (

        <Link to={`/tracks/${track.id}`}>
        <section className="track-index-item">

              <p className="track-number">
                {track.id}
              </p>

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
      <div>
        <h1>{ tracks }</h1>
      </div>
    );
  }
}

export default TrackIndex;
