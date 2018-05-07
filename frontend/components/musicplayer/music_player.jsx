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
        <h1>{ this.props.track }</h1>
        <audio controls>
          <source src="https://res.cloudinary.com/dawsdkywh/video/upload/v1525667025/Gallant_-_Weight_In_Gold_Louis_Futon_Remix.mp3" />
        </audio>

      </div>
    );
  }

}

export default MusicPlayer;
