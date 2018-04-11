import { connect } from 'react-redux';
import CommentIndexContainer from './comment_index';
import { fetchTrackComments, destroyTrackComment } from '../../actions/track_comment_actions';

const mapStateToProps = (state) => ({
  comments: Object.values(state.entities.trackComments),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrackComments: (trackId) => dispatch(fetchTrackComments(trackId)),
  destroyTrackComment: (commentId) => dispatch(destroyTrackComment(commentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndexContainer);
