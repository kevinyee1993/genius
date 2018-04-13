<!-- **Content:**
- [ ] Has a `# Title`
- [ ] Links to the Wiki design documents
- [ ] Describes technologies used
- [ ] Describes core functionality
- [ ] Lists future directions
- [ ] Fills out `Description` and `Website` at the top of the repo.

**Format:**
- [ ] Uses markdown formatting
- [ ] Includes code snippets (with triple backticks, and the language ` ```javascript...``` `)
- [ ] Includes screenshots / gifs

**Optional:**
- [ ] Describes technical challenges
- [ ] Add `topics` to the top of the repo -->

# ConvoGenius

[Live Version](https://convogenius.herokuapp.com/#/)


# Description
ConvoGenius is a clone of [Genius](https://genius.com/) that allows users to decipher and break down the nuances of different conversations.  Ever wonder if your significant other is mad at you or if they're actually "fine"?  Ever wonder if your friend is hinting that they want some of your food?  ConvoGenius is the app for you.

[Wiki design documents](https://github.com/kevinyee1993/genius/wiki)


# Features
* User authentication
* Users can create/update/delete comments
* Users can upvote/downvote comments

### Creating a Comment
![Imgur](https://i.imgur.com/4jUjVDm.gif)

Comments are created using React/Redux which allows any new comments to appear immediately without having to refresh the page.  

### Updating a Comment
![Imgur](https://i.imgur.com/WBMoRgg.gif)

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
