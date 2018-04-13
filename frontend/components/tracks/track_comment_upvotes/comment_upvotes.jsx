import React from 'react';


//just gotta add buttons here that call dispatch actions or whatever feel me
//gotta do some logic here like if an upvote already has an upvote value
class CommentUpvotes extends React.Component {
  constructor(props) {
    super(props);
    this.upvotePressed = this.upvotePressed.bind(this);
  }

  componentDidMount() {
    this.props.fetchUpvotes();
    this.props.fetchTrackComments();
  }


  upvotePressed() {
    let currentUpvote;

    //checks to see if a user has upvoted this comment
    currentUpvote = this.props.upvotes.find(upvote => upvote.user_id === this.props.currentUser.id );


    //want to add a condition for when user upvotes on a downvote or something
    if(currentUpvote && currentUpvote.vote_value === 1) {
      this.props.destroyUpvote(currentUpvote.id);
    }
    else {
      this.props.createUpvote(this.props.comment.id, {comment_upvote: {vote_value: 1}});
    }




      // let currentUpvote;
      // currentUpvote = this.props.comment.upvotes.find(upvote => upvote.user_id === this.props.currentUser.id );

      // if (currentUpvote && currentUpvote.user_id === this.props.currentUser.id && currentUpvote.vote_value === 1) {
      //   this.props.destroyUpvote(currentUpvote.id);
      // }
      // else {
        // this.props.createUpvote(this.props.comment.id, {comment_upvote: {vote_value: 1}});
      // }

    }

  render() {
    // let currentComment = this.props.comments.find(comment => comment.id === this.props.comment.id );
    let score = 0;
    this.props.upvotes.map( upvote => {
      if(upvote.comment_id === this.props.comment.id) {
        score += upvote.vote_value;
      }
    }
    );

    return(

      <div>
        <button onClick={ () => this.upvotePressed() }>Upvote</button>

          { score }

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
