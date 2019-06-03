import React from "react";
import { Helmet } from "react-helmet";

import "../../styles/Events.scss";

const Event1 = require("../../images/event1.jpg");
const Event2 = require("../../images/event2.jpg");
const Event3 = require("../../images/event3.jpg");

export const Events = props => {
  return (
    <section>
      <Helmet>
        <title>Events</title>
        <meta
          name="description"
          content="Examples of Events by Tom Jane, Developer"
        />
      </Helmet>
      <div className="Events">
        <div className="Events--introduction">
          <p> </p>
          <h4>
            <strong>Jack Morton - London</strong>
          </h4>
          <p>
            I was brought in to Jack Morton as Technical lead on the creation of
            5 mini games for an Event in Washington. I created 3 of the games in
            React and Javascript, using Electron to deploy the fullscreen
            applications. The other 2 games were created by freelancers, on a AR
            unity app and the other an openFrameworks C++ Kinect and projector
            Application.
          </p>
          <p>
            The games I created were a document intelligence simultaneous multi
            user timed drag and drop, a voice recognition quiz and a 4 player
            intelligence automation system, The purpose of these was to
            demonstrate the power and benefits of AI in the corporate world.
          </p>
        </div>
        <div className="Events--header">
          Drag and Drop - Document Intelligence Game
        </div>
        <img className="Events--image" src={Event1} />
        <div className="Events--header">
          Multiplayer - Intelligence Automation Game
        </div>
        <img className="Events--image" src={Event2} />
        <div className="Events--header">Augmented Reality - Unity Game</div>
        <img className="Events--image" src={Event3} />
      </div>
    </section>
  );
};
