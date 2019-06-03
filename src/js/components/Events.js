import React from "react";

import "../../styles/Events.scss";

const Event1 = require("../../images/event1.jpg");
const Event2 = require("../../images/event2.jpg");
const Event3 = require("../../images/event3.jpg");

export const Events = props => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="Events">
            <div className="Events--introduction">
              <div className="col-sm-10 offset-sm-1">
                <p>
                  <strong>Jack Morton - London</strong>
                </p>
                <p>
                  I was brought in to Jack Morton as Technical lead on the
                  creation of 5 mini games for an Event in Washington. I created
                  3 of the games in React and Javascript, using Electron to
                  deploy the fullscreen applications. The other 2 games were
                  created by freelancers, on a AR unity app and the other an
                  openFrameworks C++ Kinect and projector Application.
                </p>
                <p>
                  The games I created were a document intelligence simultaneous
                  multi user timed drag and drop, a voice recognition quiz and a
                  4 player intelligence automation system, The purpose of these
                  was to demonstrate the power and benefits of AI in the
                  corporate world.
                </p>
              </div>
            </div>
            <div className="Events--header">
              Drag and Drop - Document Intelligence Game
            </div>
            <div className="col-sm-10 offset-sm-1">
              <img className="Events--image" src={Event1} />
            </div>
            <div className="Events--header">
              Multiplayer - Intelligence Automation Game
            </div>
            <div className="col-sm-10 offset-sm-1">
              <img className="Events--image" src={Event2} />
            </div>
            <div className="Events--header">Augmented Reality - Unity Game</div>
            <div className="col-sm-10 offset-sm-1">
              <img className="Events--image" src={Event3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
