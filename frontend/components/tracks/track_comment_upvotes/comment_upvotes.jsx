import React from 'react';


//just gotta add buttons here that call dispatch actions or whatever feel me
//gotta do some logic here like if an upvote already has an upvote value
class CommentUpvotes extends React.Component {
  constructor(props) {
    super(props);
  }

  // upVotePressed() {
  //
  // }

  render() {
    return(
      <div>
        <button onClick={ () => this.props.createUpvote(this.props.comment.id, {comment_upvote: {vote_value: 1}}) }>Upvote</button>

          {this.props.comment.score}

        <button>Downvote</button>

      </div>
    );
  }
}

export default CommentUpvotes;
