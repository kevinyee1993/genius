import React from 'react';

class Lyrics extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllTracks();
  }

  render() {
    return(
      <div>
        <body className="track-lyrics">
          <p>{ this.props.track.lyrics }</p>
        </body>
      </div>
    );
  }
}

export default Lyrics;
