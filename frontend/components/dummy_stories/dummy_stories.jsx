import React from 'react';

class DummyStories extends React.Component {


  render() {
    return(
      <div className="dummy-stories">
        <h1 className="story-heading">Placeholder Pictures</h1>


        <div className="story-images">
          <section className="main-story">
            <img src="http://wrs8a3ki8zth7aut28u4yi107g.wpengine.netdna-cdn.com/wikiblog/wp-content/uploads/sites/2/2015/04/People-Talking-About-This-e1429217174824.jpg"></img>

          </section>

          <section className="side-stories">
          </section>
        </div>

      </div>
    );
  }
}

export default DummyStories;

// <img className="main-story" src="http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg"></img>
// <img className="main-story" src="http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg"></img>
