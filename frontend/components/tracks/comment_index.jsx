import React from 'react';
import CommentPostFormContainer from './comment_post_form_container';
import CommentIndexItemContainer from './comment_index_item_container';
import CommentEditFormContainer from './comment_edit_form/comment_edit_form_container';

import { Route, Link, Switch } from 'react-router-dom';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTrackComments(this.props.match.params.trackId);
  }

//this was within the comments map, plug it in later if you fuck up

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

//now need to get these buttons to do stuff yadadamean
// <CommentIndexItemContainer comment={ comment }/>

render() {

    const comments = this.props.comments.map(comment => {

      return (
        <Switch>
          <Route path={`/tracks/:trackId/comments/${ comment.id }/edit`} render={ () => <CommentEditFormContainer comment={ comment } trackId={ this.props.match.params.trackId }/> } />
          <Route path={`/tracks/:trackId`} render={ () => <CommentIndexItemContainer comment={ comment } trackId={ this.props.match.params.trackId }/> } />
        </Switch>
      );
    });

    return(
      <div>
        <Route path={`/tracks/:trackId`} component={ CommentPostFormContainer } />
        { comments.reverse() }
      </div>
    );
  }
}

export default CommentIndex;
