import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchSingleTrack, fetchAllTracks } from '../../actions/track_actions';

// track: state.entities.tracks[ownProps.match.params.trackId],
// state,
// track: state.entities.tracks[1]
const mapStateToProps = (state, ownProps) => ({
  track: state.entities.tracks
});

const mapDispatchToProps = dispatch => ({
  fetchSingleTrack: id => dispatch(fetchSingleTrack(id)),
  fetchAllTracks: () => dispatch(fetchAllTracks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
