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

    return(
      <div>
        <header className="track-show-header">
          <h1>{ this.props.track.title }</h1>
          <h2>{ this.props.track.artist }</h2>
          <h3>{ album }</h3>
        </header>
      </div>
    );
  }
}

export default TrackShow;
