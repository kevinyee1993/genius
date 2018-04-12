import React from 'react';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

//need to pass down comment into this container

  render() {
    let editAndDeleteButtons;
    if(this.props.currentUser && this.props.currentUser.id === this.props.comment.author_id) {
      editAndDeleteButtons = (
        <div>
          <button>Edit</button>
          <button onClick={ () => this.props.destroyTrackComment(this.props.comment.id) }>Delete</button>
        </div>
      );
    }

    return (
      <ul className="comment-entry">
       <li> {this.props.comment.author.username} </li>
       <li> {this.props.comment.body} </li>
       { editAndDeleteButtons }
       <br></br>
     </ul>
    );
  }


}

export default CommentIndexItem;

// let editAndDeleteButtons;
// if(this.props.currentUser && this.props.currentUser.id === comment.author_id) {
//   editAndDeleteButtons = (
//     <div>
//       <button>Edit</button>
//       <button onClick={ () => this.props.destroyTrackComment(comment.id) }>Delete</button>
//     </div>
//   );
// }
//
// return(
//   <ul className="comment-entry">
//     <li> {comment.author.username} </li>
//     <li> {comment.body} </li>
//     { editAndDeleteButtons }
//     <br></br>
//   </ul>
// );
