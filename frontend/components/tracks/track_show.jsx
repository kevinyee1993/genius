import React from 'react';

class TrackShow extends React.Component {
  componentDidMount() {
    this.props.fetchSingleTrack(this.props.match.params.trackId);
  }


  //if the next url id is not equal to the current url id,
  //re-render the page with the new information
  // componentWillReceiveProps(nextProps) {
  //   if(this.props.track.id !== nextProps.match.params.trackId) {
  //     this.props.fetchSingleTrack(nextProps.match.params.trackId);
  //   }
  // }

  render() {
    return(
      <div>
          <h2>{this.props.track.title}</h2>
      </div>
    );
  }
}

export default TrackShow;
