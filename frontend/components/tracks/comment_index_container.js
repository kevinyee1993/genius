import { connect } from 'react-redux';
import CommentIndexContainer from './comment_index';
import { fetchTrackComments } from '../../actions/track_comment_actions';

const mapStateToProps = (state) => ({
  comments: Object.values(state.entities.trackComments)
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrackComments: (trackId) => dispatch(fetchTrackComments(trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndexContainer);
