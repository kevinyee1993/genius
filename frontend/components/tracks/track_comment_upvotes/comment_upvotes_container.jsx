import { connect } from 'react-redux';
import CommentUpvotes from './comment_upvotes';
import { fetchUpvotes, createUpvote, updateUpvote, destroyUpvote } from '../../../actions/track_comment_upvote_actions';
import { fetchTrackComments } from '../../../actions/track_comment_actions.js';

const mapStateToProps = (state) => {
  return(
    {
      upvotes: Object.values(state.entities.trackCommentUpvotes),
      comments: Object.values(state.entities.trackComments),
      currentUser: state.session.currentUser
    }
  );
};

// ({
//   upvotes: Object.values(state.entities.trackCommentUpvotes),
//   comments: Object.values(state.entities.trackComments)
// });

const mapDispatchToProps = (dispatch) => {
  return ({
  fetchTrackComments: () => dispatch(fetchTrackComments),
  fetchUpvotes: () => dispatch(fetchUpvotes()),
  createUpvote: (commentId, voteValue) => dispatch(createUpvote(commentId, voteValue)),
  updateUpvote: (upvote) => dispatch(updateUpvote(upvote)),
  destroyUpvote: (upvoteId) => dispatch(destroyUpvote(upvoteId))}
);};

export default connect(mapStateToProps, mapDispatchToProps)(CommentUpvotes);
