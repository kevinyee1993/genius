import React from 'react';

class TrackIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllTracks();
  }

  render() {
    const tracks = this.props.tracks.map(track => {
      return (
        <div>

          <p>
            {track.id}
          </p>

          <p>
            {track.title}
          </p>

          <p>
            {track.artist}
          </p>
          <img src="https://s.abcnews.com/images/Lifestyle/puppy-ht-3-er-170907_4x3_992.jpg"></img>

        </div>
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
