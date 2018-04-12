import { connect } from 'react-redux';
import CommentEditForm from './comment_edit_form';
import { updateTrackComment } from '../../../actions/track_comment_actions';

//not sure if I need any state props here..
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  updateTrackComment: (comment) => dispatch(updateTrackComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentEditForm);
