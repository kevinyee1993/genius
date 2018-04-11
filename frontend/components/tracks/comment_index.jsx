import React from 'react';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTrackComments(this.props.match.params.trackId);
  }

  render() {
    const comments = this.props.comments.map(comment => {
      return(
        <ul>
          <li> {comment.author.username} </li>
          <li> {comment.body} </li>
          <br></br>
        </ul>
      );
    });

    return(
      <div>
        Hello this is the comment index.  Create and update forms go above here
        { comments }
      </div>
    );
  }
}

export default CommentIndex;
