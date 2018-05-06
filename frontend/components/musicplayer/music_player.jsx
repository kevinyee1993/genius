import React from 'react';
import { withRouter } from 'react-router-dom';

class MusicPlayer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    // let check = this.props.track.album;

    return(
      <div>
        <h1>THIS IS THE MUSIC PLAYER CONTAINER WHERE AM I</h1>
        <h1>{ this.props.track }</h1>
      </div>
    );
  }

}

export default MusicPlayer;
