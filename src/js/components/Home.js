import React from "react";
import { Helmet } from "react-helmet";

import Featured from "./Featured";

import "../../styles/Home.scss";

const Myface = require("../../images/myface.jpg");

export default class Home extends React.Component {
  render() {
    return (
      <section>
        <Helmet>
          <title>Home</title>
          <meta
            name="description"
            content="Introduction to the portfolio of Tom Jane, Developer"
          />
        </Helmet>
        <div className="Home--row">
          <div className="Home--left-section">
            <div className="Home--panel">
              <img className="Home--content-face" alt="Face" src={Myface} />
            </div>
          </div>
          <div className="Home--right-section">
            <div className="Home--panel">
              <h4>
                <strong>Introduction</strong>
              </h4>
              <p>
                I am a reliable and resourceful full stack senior developer. I
                have been freelancing commercially for roughly 20 years and
                coding for fun for over 30 years. I have recently taken on the
                role of Technical lead and have enjoyed the extra challenges
                involved in this.
              </p>
              <p>
                Technology wise I am strongest with the front end and have
                recently been focusing on React/Redux javascript. Additionally,
                I have been learning the Arduino platform for open source
                electronics and the creation of “Internet of things” devices.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="Home--divider">Featured Projects</div>
        </div>
        <div className="Home--row">
          <Featured project={this.props.projects[0]} color={this.props.color} />
          <Featured project={this.props.projects[1]} color={this.props.color} />
        </div>
      </section>
    );
  }
}
