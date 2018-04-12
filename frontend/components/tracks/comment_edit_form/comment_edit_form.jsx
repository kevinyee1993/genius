import React from 'react';
import { withRouter, Link } from 'react-router-dom';

// import { fetchTrackComments } from '../../../actions/track_comment_actions';
class CommentEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      body: this.props.comment.body,
      id: this.props.comment.id
    };
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

//redirect to the track show page after this!!
  handleSubmit(e) {
    e.preventDefault();
    this.props.updateTrackComment(this.state).then(() => this.props.history.push(`/tracks/${this.props.trackId}`));
  }

  render() {
    console.log(this.props);
    return(
      <div>
      <form className="edit-comment-form" onSubmit={ this.handleSubmit }>

        <h1> {this.props.comment.author.username} </h1>

        <textarea
          value={ this.state.body }
          onChange = { this.update('body') }
          />

        <div className="edit-form-buttons">
          <input type="submit" value="Update"/>
          <Link to={`/tracks/${this.props.trackId}`}>Close</Link>
        </div>

      </form>
    </div>
    );
  }
}

export default CommentEditForm;
