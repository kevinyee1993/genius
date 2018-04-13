import React from 'react';


//just gotta add buttons here that call dispatch actions or whatever feel me
//gotta do some logic here like if an upvote already has an upvote value
class CommentUpvotes extends React.Component {
  constructor(props) {
    super(props);
    this.upvotePressed = this.upvotePressed.bind(this);
    this.downvotePressed = this.downvotePressed.bind(this);
    this.checkUpvoteExistAndValue = this.checkUpvoteExistAndValue.bind(this);
  }

  componentDidMount() {
    this.props.fetchUpvotes();
    this.props.fetchTrackComments();
  }

  checkUpvoteExistAndValue() {
    let currentUpvote;

    if(!this.props.currentUser) {
      return 0;
    }

    currentUpvote = this.props.upvotes.find(upvote => (upvote.user_id === this.props.currentUser.id
    && upvote.comment_id === this.props.comment.id));

    if(currentUpvote && currentUpvote.vote_value === 1) {
      return 1;
    } else if (currentUpvote && currentUpvote.vote_value === -1) {
      return -1;
    }
    else {
      return 0;
    }
  }


  upvotePressed() {
    let currentUpvote;

    //checks to see if a user has upvoted this comment
    currentUpvote = this.props.upvotes.find(upvote => (upvote.user_id === this.props.currentUser.id
    && upvote.comment_id === this.props.comment.id));
    //want to add a condition for when user upvotes on a downvote or something
      if(currentUpvote && currentUpvote.vote_value === 1) {
        this.props.destroyUpvote(currentUpvote.id);
      } else if(currentUpvote && currentUpvote.vote_value === -1) {
        this.props.destroyUpvote(currentUpvote.id);
        this.props.createUpvote(this.props.comment.id, {comment_upvote: {vote_value: 1}});
      } else {
        this.props.createUpvote(this.props.comment.id, {comment_upvote: {vote_value: 1}});
      }
    }

    downvotePressed() {
      let currentUpvote;
      currentUpvote = this.props.upvotes.find(upvote => (upvote.user_id === this.props.currentUser.id
      && upvote.comment_id === this.props.comment.id));


      if(currentUpvote && currentUpvote.vote_value === -1) {
        this.props.destroyUpvote(currentUpvote.id);
      } else if(currentUpvote && currentUpvote.vote_value === 1) {
        this.props.destroyUpvote(currentUpvote.id);
        this.props.createUpvote(this.props.comment.id, {comment_upvote: {vote_value: -1}});
      }
      else {
        this.props.createUpvote(this.props.comment.id, {comment_upvote: {vote_value: -1}});
      }
    }

  render() {

    // console.log(this.checkUpvoteExistAndValue());

    // let currentComment = this.props.comments.find(comment => comment.id === this.props.comment.id );
    let score = 0;
    this.props.upvotes.map( upvote => {
      if(upvote.comment_id === this.props.comment.id) {
        score += upvote.vote_value;
      }
    }
    );

    let fontColor;

    if(score > 0) {
      fontColor = "green";
    } else if (score < 0) {
      fontColor = "red";
    } else {
      fontColor = "black";
    }

//check to see if user already upvoted or downvoted
//if upvote.userId === upvote.id && upvote.voteValue === 1 make button green
//if upvote.userId === upvote.id && upvote.voteValue === -11 make button red
//else make button black


    let upvoteHasCurrentUser = "no-user";
    let downvoteHasCurrentUser = "no-user";

    if(this.props.currentUser) {
      if(this.checkUpvoteExistAndValue() === 1) {
        upvoteHasCurrentUser = "has-current-user-green";
        downvoteHasCurrentUser = "downvote-has-current-user-black";
      }
    else if(this.checkUpvoteExistAndValue() === -1) {
      upvoteHasCurrentUser = "upvote-has-current-user-black";
      downvoteHasCurrentUser = "has-current-user-red";
    }
    else {
      upvoteHasCurrentUser = "upvote-has-current-user-black";
      downvoteHasCurrentUser = "downvote-has-current-user-black";
    }
    }

    return(

      <div className="upvote-value-downvote">

        <i class="fa fa-thumbs-up" aria-hidden="true"></i>

        <button className={ upvoteHasCurrentUser } onClick={ () => this.upvotePressed() }>Upvote</button>

              <p className={ fontColor }>{ score }</p>


        <button className={ downvoteHasCurrentUser }onClick={ () => this.downvotePressed() }>Downvote</button>

      </div>
    );
  }
}

export default CommentUpvotes;


// <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
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
