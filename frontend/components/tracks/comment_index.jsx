import React from 'react';
import CommentPostFormContainer from './comment_post_form_container';
import { Route } from 'react-router-dom';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTrackComments(this.props.match.params.trackId);
  }

  render() {


//now need to get these buttons to do stuff yadadamean
    const comments = this.props.comments.map(comment => {
      let editAndDeleteButtons;

      if(this.props.currentUser && this.props.currentUser.id === comment.author_id) {
        editAndDeleteButtons = (
          <div>
            <button>Edit</button>
            <button onClick={ () => this.props.destroyTrackComment(comment.id) }>Delete</button>
          </div>
        );
      }

      return(
        <ul className="comment-entry">
          <li> {comment.author.username} </li>
          <li> {comment.body} </li>
          { editAndDeleteButtons }
          <br></br>
        </ul>
      );
    });

    return(
      <div>
        <Route path={`/tracks/:trackId`} component={ CommentPostFormContainer } />

        Hello this is the comment index.  Create and update forms go above here
        { comments.reverse() }
      </div>
    );
  }
}

export default CommentIndex;
