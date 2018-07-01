import React from "react";

import Featured from "./Featured";

import Myface from "../../images/myface.jpg";

export default class Home extends React.Component {
  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="Home--header">Home</div>
          </div>
          <div className="col-sm-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
            <div className="Home--content">
              <img src={Myface} className="Home--content-face" alt="my face" />
            </div>
          </div>
          <div className="col-sm-12 col-lg-10 offset-lg-1">
            <div className="Home--header">Introduction</div>
          </div>
          <div className="col-md-6 col-lg-4 offset-lg-2">
            <div className="Home--content">
              <p>
                I am a reliable and resourceful full stack senior developer. I
                have been freelancing commercially for roughly 18 years and
                coding for fun for over 28 years. I have recently taken on the
                role of Technical lead and have enjoyed the extra challenges
                involved in this.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 ">
            <div className="Home--content">
              <p>
                Technology wise I am strongest with the front end and have
                recently been focusing on React/Redux javascript. Additionally,
                I have been learning the Arduino platform for open source
                electronics and the creation of “Internet of things” devices.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-lg-10 offset-lg-1">
            <div className="Home--header">Featured Projects</div>
          </div>
          <div className="col-sm-12 col-md-5 offset-md-1">
            <Featured project={this.props.projects[0]} />
          </div>
          <div className="col-sm-12 col-md-5">
            <Featured project={this.props.projects[1]} />
          </div>
        </div>
      </section>
    );
  }
}
