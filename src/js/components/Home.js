import React from "react";

import { DuotoneImage } from "react-duotone";

import Featured from "./Featured";

import "../../styles/Home.scss";

import Myface from "../../images/myface.jpg";

export default class Home extends React.Component {
  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-4 col-xl-3">
            <div className="Home--panel">
              <DuotoneImage
                className="Home--content-face"
                src={Myface}
                primaryColor="#ffffff"
                secondaryColor={this.props.color}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-8 col-xl-9">
            <div className="Home--panel">
              <h4>
                <strong>Introduction</strong>
              </h4>
              <p>
                I am a reliable and resourceful full stack senior developer. I
                have been freelancing commercially for roughly 18 years and
                coding for fun for over 28 years. I have recently taken on the
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
          <div className="col-sm-12 col-lg-12">
            <div className="Home--divider">Featured Projects</div>
          </div>
          <div className="col-sm-12 col-md-5 offset-md-1">
            <Featured
              project={this.props.projects[0]}
              color={this.props.color}
            />
          </div>
          <div className="col-sm-12 col-md-5">
            <Featured
              project={this.props.projects[1]}
              color={this.props.color}
            />
          </div>
        </div>
      </section>
    );
  }
}
