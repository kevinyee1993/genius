# ConvoGenius

[Live Version](https://convogenius.herokuapp.com/#/)
![Imgur](https://i.imgur.com/YFRq7gp.png)


# Description
ConvoGenius is a clone of [Genius](https://genius.com/) that allows users to decipher and break down the nuances of different conversations.  Ever wonder if your significant other is mad at you or if they're actually "fine"?  Ever wonder if your friend is hinting that they want some of your food?  ConvoGenius is the app for you.

[Wiki design documents](https://github.com/kevinyee1993/genius/wiki)


# Core Functionality and Features
* User authentication
* Users can create/update/delete comments
* Users can upvote/downvote comments


### User Authentication
Users can either choose to sign up to create their own account and then sign in or they can click the demo login button to automatically sign in with a pre-created account.  The sign in and sign out forms appear as modals which can be exited out of by clicking the greyed out areas of the page.  The nav bar changes depending on whether a user is logged in.  A logged in user will see a Log Out button while someone not logged in will see Sign Up, Sign In, or Demo.

![Imgur](https://i.imgur.com/f7ze8wC.gif)

### Creating a Comment
![Imgur](https://i.imgur.com/4jUjVDm.gif)

Comments are created using React/Redux which allows any new comments to appear immediately without having to refresh the page.  

### Updating a Comment
![Imgur](https://i.imgur.com/WBMoRgg.gif)

Alternating between lyrics and a text field which received comment updates was accomplished through this code:
``` JavaScript
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
```

Each of the comments were looped through and depending on the URL, each iteration of the loop would either return the lyrics or a text field.  If a user decided to edit a comment, the URL would change to that of a specific comment which would cause the iteration of that comment to render a text field instead.

### Deleting a Comment
![Imgur](https://i.imgur.com/20evcsy.gif)

### Upvoting and Downvoting
![Imgur](https://i.imgur.com/LqOgZVE.gif)




# Technologies
The backend of this app was built with Ruby on Rails.  PostgreSQL was used to manage the database.  The frontend was built using JavaScript, namely the JavaScript libraries React and Redux.   React/Redux allowed the app to be built as a single-page app which merely re-rendered different components on the page rather than redirecting to a new page.  

To connect the frontend with the backend, jQuery was used.  AJAX requests were made to obtain JSON needed to update the frontend component states.

# Future Direction
* Finish annotations
* User pages
* Track creation
* Allows users to post images/gifs in their comments
* Music player in the track show pages
