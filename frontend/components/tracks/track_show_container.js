import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchSingleTrack } from '../../actions/track_actions';
// track: state.entities.tracks[ownProps.match.params.trackId],

const mapStateToProps = (state, ownProps) => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  fetchSingleTrack: id => dispatch(fetchSingleTrack(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
