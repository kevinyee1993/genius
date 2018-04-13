import React from 'react';

class DummyStories extends React.Component {


  render() {
    return(

      <div className="front-page-stories">
        <div className="dummy-stories">
          <h1 className="story-heading">Placeholder Pictures</h1>

          <div className="story-images">
            <section className="main-story">
              <img src="http://wrs8a3ki8zth7aut28u4yi107g.wpengine.netdna-cdn.com/wikiblog/wp-content/uploads/sites/2/2015/04/People-Talking-About-This-e1429217174824.jpg"></img>

            </section>

            <div className="side-stories">
                <div className="side-story1">
                  <img src="https://gymjunkies.com/wp-content/uploads/2015/05/People-Talking.jpg"></img>
                </div>

                <div className="side-story2">
                  <img src="https://img.huffingtonpost.com/asset/56afcfea1a00002d00ab1c14.jpeg?cache=mhx6ishigb&ops=crop_0_66_3864_2277,scalefit_720_noupscale"></img>
                </div>
            </div>
          </div>
        </div>

        <div className="extra-section">
          <h1 className="story-heading"> Conversation Facts </h1>

          <div className="extra-entries">
            <div className="extra-entry-item">
              <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/hsdogdog-profile_image-5550ade194780dfc-300x300.jpeg"></img>
              <p className="extra-story-heading">Dogs are smarter than you think when you talk to them</p>
            </div>

            <div className="extra-entry-item">
              <img src="https://previews.123rf.com/images/gstockstudio/gstockstudio1509/gstockstudio150900143/45174951-enjoying-pizza-together-group-of-happy-young-people-eating-pizza-while-sitting-outdoors.jpg"></img>
              <p className="extra-story-heading">Eating pizza makes conversations 23% better</p>
            </div>

            <div className="extra-entry-item">
              <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/hsdogdog-profile_image-5550ade194780dfc-300x300.jpeg"></img>
              <p className="extra-story-heading">Dogs are smarter than you think when you talk to them</p>
            </div>

            <div className="extra-entry-item">
              <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/hsdogdog-profile_image-5550ade194780dfc-300x300.jpeg"></img>
              <p className="extra-story-heading">Dogs are smarter than you think when you talk to them</p>
            </div>

            <div className="extra-entry-item">
              <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/hsdogdog-profile_image-5550ade194780dfc-300x300.jpeg"></img>
              <p className="extra-story-heading">Dogs are smarter than you think when you talk to them</p>
            </div>

          </div>


        </div>
      </div>
    );
  }
}

export default DummyStories;

// <img className="main-story" src="http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg"></img>
// <img className="main-story" src="http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg"></img>
