import { connect } from 'react-redux';
import CommentPostForm from './comment_post_form';
import { createTrackComment } from '../../actions/track_comment_actions';



//not sure if need any state here for now.. errors maybe for now
const mapStateToProps = (state) => ({
  errors: state.errors.trackComments
});

const mapDispatchToProps = (dispatch) => ({
  createTrackComment: (trackId, comment) => dispatch(createTrackComment(trackId, comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentPostForm);
