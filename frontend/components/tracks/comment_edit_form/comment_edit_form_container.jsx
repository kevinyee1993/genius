import { connect } from 'react-redux';
import CommentEditForm from './comment_edit_form';
import { updateTrackComment } from '../../../actions/track_comment_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  updateTrackComment: (comment) => dispatch(updateTrackComment(comment))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentEditForm));
