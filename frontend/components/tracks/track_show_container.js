import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchSingleTrack, fetchAllTracks } from '../../actions/track_actions';

// state,
// track: state.entities.tracks[1]
// track: state.entities.tracks
const mapStateToProps = (state, ownProps) => ({
  track: state.entities.tracks[ownProps.match.params.trackId],
});

const mapDispatchToProps = dispatch => ({
  fetchSingleTrack: id => dispatch(fetchSingleTrack(id)),
  fetchAllTracks: () => dispatch(fetchAllTracks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
