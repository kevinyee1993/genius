import React from 'react';

class DummyStories extends React.Component {


  render() {
    return(
      <div>
        <h1 className="story-heading">Featured Dog Pictures</h1>

        <section className="main-story">
          <img src="http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg"></img>

        </section>
      </div>
    );
  }
}

export default DummyStories;
