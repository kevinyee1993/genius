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
            {this.props.track.lyrics.split('\n').map((item, key) => {
              return <span key={key}>{item}<br/></span>
              })}
        </body>
      </div>
    );
  }
}

export default Lyrics;
