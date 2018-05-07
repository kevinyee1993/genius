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
        <audio controls>Hello
          <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3" type="audio/mpeg" />
        </audio>

      </div>
    );
  }

}

export default MusicPlayer;
