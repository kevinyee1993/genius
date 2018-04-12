import React from 'react';

class CommentPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      body: ""
    };

  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  //change this later to a different reroute
  //hardcoded the 1 just to test
  //hard code this, but this is working right now
  handleSubmit(e) {
    e.preventDefault();
    this.props.createTrackComment(this.props.match.params.trackId, this.state);
    this.setState({body: ""});
  }


  render() {
    return(
      <div className="comment-form-container">

        <form className="comment-form" onSubmit={ this.handleSubmit }>

          <textarea
            className="comment-form-input"
            placeholder="Add a comment"
            value={this.state.body}
            onChange = { this.update('body') }
          />

        <input type="submit" value="Submit" className="comment-form-submit"/>

        </form>

      </div>
    );
  }
}

export default CommentPostForm;
