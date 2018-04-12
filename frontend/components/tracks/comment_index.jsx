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
