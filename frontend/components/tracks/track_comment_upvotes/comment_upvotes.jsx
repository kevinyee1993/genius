import React from 'react';


//just gotta add buttons here that call dispatch actions or whatever feel me
//gotta do some logic here like if an upvote already has an upvote value
class CommentUpvotes extends React.Component {
  constructor(props) {
    super(props);
    this.upvotePressed = this.upvotePressed.bind(this);
  }


  upvotePressed() {
      let currentUpvote;
      currentUpvote = this.props.comment.upvotes.find(upvote => upvote.user_id === this.props.currentUser.id );

      if (currentUpvote && currentUpvote.user_id === this.props.currentUser.id && currentUpvote.vote_value === 1) {
        this.props.destroyUpvote(currentUpvote.id);
      }
      else {
        this.props.createUpvote(this.props.comment.id, {comment_upvote: {vote_value: 1}});
      }
    }

  render() {
    return(
      <div>
        <button onClick={ () => this.upvotePressed() }>Upvote</button>

          {this.props.comment.score}

        <button>Downvote</button>

      </div>
    );
  }
}

export default CommentUpvotes;



// import React from 'react';
//just gotta add buttons here that call dispatch actions or whatever feel me
//gotta do some logic here like if an upvote already has an upvote value
// class CommentUpvotes extends React.Component {
//   constructor(props) {
//     super(props);
//     this.upvotePressed = this.upvotePressed.bind(this);
//   }
//
// // () =>
// //destroyUpvote
//
// //need to test updateUpvote
//   upvotePressed() {
//     let currentUpvote;
//     currentUpvote = this.props.comment.upvotes.find(upvote => upvote.user_id === this.props.currentUser.id );
//
//     if (currentUpvote && currentUpvote.user_id === this.props.currentUser.id && currentUpvote.vote_value === 1) {
//       this.props.destroyUpvote(currentUpvote.id);
//     }
//     else {
//       this.props.createUpvote(this.props.comment.id, {comment_upvote: {vote_value: 1}});
//     }
// }
//
//   render() {
//     return(
//       <div>
//         <button onClick={ () => this.upvotePressed() }>Upvote</button>
//
//           {this.props.comment.score}
//
//         <button>Downvote</button>
//
//       </div>
//     );
//   }
// }
//
// export default CommentUpvotes;
