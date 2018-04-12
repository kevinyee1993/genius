import React from 'react';
import { withRouter } from 'react-router-dom';

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
    console.log(this.state);
    this.props.updateTrackComment(this.state).then(() => this.props.history.push(`/tracks/${this.props.trackId}`));
  }

  render() {
    return(
      <div>
      <form onSubmit={ this.handleSubmit }>

        <textarea
          value={ this.state.body }
          onChange = { this.update('body') }
          />

        <input type="submit" value="Update"/>

      </form>
    </div>
    );
  }
}

export default CommentEditForm;
