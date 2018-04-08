import React from 'react';

class TrackShow extends React.Component {

  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.fetchSingleTrack(this.props.match.params.trackId);
  }


  //MAYBE PUT THIS BACK IN LATER????!?
  //if the next url id is not equal to the current url id,
  //re-render the page with the new information
  // componentWillReceiveProps(nextProps) {
  //   if(this.props.track.id !== nextProps.match.params.trackId) {
  //     this.props.fetchSingleTrack(nextProps.match.params.trackId);
  //   }
  // }


  render() {
    let album;
    if (this.props.track.album) {
      album = `Album ${ this.props.track.album }`;
    }

    //need to put an if statement here, if there is no provided
    //img_url for the track, need to give it a default value
    //TODO: nick young confused picture

    return(
      <div>

        <div className="track-show-header-container">
          <header className="track-show-header">
            <img src="http://i0.kym-cdn.com/photos/images/facebook/000/993/875/084.png" className="track-pic" alt="track"></img>

            <section className="track-info">
              <h1 className = "show-track-title">{ this.props.track.title }</h1>
              <h2 className = "show-track-artist">{ this.props.track.artist }</h2>
              <h3 className = "show-track-album">{ album }</h3>
            </section>


          </header>
        </div>

      </div>
    );
  }
}

export default TrackShow;
