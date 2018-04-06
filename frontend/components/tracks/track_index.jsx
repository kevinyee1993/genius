import React from 'react';

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
        <section class="track-index-item">

          <p class="track-number">
            {track.id}
          </p>

          <section class="title-and-artist">
            <p class="track-title">
              {track.title}
            </p>

            <p class="track-artist">
              {track.artist}
            </p>
        </section>

        </section>
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
