import { connect } from 'react-redux';
import CommentUpvotes from './comment_upvotes';
import { createUpvote, updateUpvote, destroyUpvote } from '../../../actions/track_comment_upvote_actions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  createUpvote: (commentId, voteValue) => dispatch(createUpvote(commentId, voteValue)),
  updateUpvote: (upvote) => dispatch(updateUpvote(upvote)),
  destroyUpvote: (upvoteId) => dispatch(destroyUpvote(upvoteId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentUpvotes);
