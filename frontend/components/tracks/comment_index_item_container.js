import { connect } from 'react-redux';
import CommentIndexItem from './comment_index_item';
import { updateTrackComment, destroyTrackComment } from '../../actions/track_comment_actions';

//not sure if I need any state props here..
const mapStateToProps = (state) => ({
  comments: Object.values(state.entities.trackComments),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  updateTrackComment: (comment) => dispatch(updateTrackComment(comment)),
  destroyTrackComment: commentId => dispatch(destroyTrackComment(commentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndexItem);
