import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

//need to pass down comment into this container

  render() {
    let editAndDeleteButtons;
    if(this.props.currentUser && this.props.currentUser.id === this.props.comment.author_id) {
      editAndDeleteButtons = (
        <div className="edit-and-delete-buttons">
          <Link to={`/tracks/${this.props.trackId}/comments/${ this.props.comment.id }/edit`}> Edit </Link>
          <button onClick={ () => this.props.destroyTrackComment(this.props.comment.id) }>Delete</button>
        </div>
      );
    }

    return (
      <ul className="comment-entry">
       <li className="username"> {this.props.comment.author.username} </li>
       <li className="comment-body"> {this.props.comment.body} </li>
       { editAndDeleteButtons }
       <br></br>
     </ul>
    );
  }


}

export default CommentIndexItem;