import React from "react";

import Featured from "./Featured";

import Myface from '../../images/myface.jpg';

export default class Home extends React.Component {
  render() {
    return <section className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="Home--header">HOME</div>
        </div>
        <div className="col-md-12 col-lg-4 offset-lg-4">
          <div className="Home--content">
            <img src={Myface} className="Home--content-face"/>
          </div>
        </div>
        <div className="col-md-12 col-lg-8 offset-lg-2">
          <div className="Home--content">
            <h3>Introduction</h3>
            <p>I am a reliable and resourceful full stack senior developer. I have been freelancing commercially for roughly 18 years and coding for fun for over 28 years. I additionally have experience on the creative side and enjoy all aspects of technology.</p>
            <p>I have recently taken on the role of Technical lead and have enjoyed the extra challenges involved in this. I have also moved more into enterprise CMS development. I have recently become an expert in Tridion CMS mainly for the Toyota/Lexus brand, and also AEM and the Sapient D2 front end framework for Unilever.</p>
            <p>Technology wise I am strongest with the front end and have spent the last few years polishing up my vanilla javascript. I have also been focusing on Html5, CSS3. Additionally, I have been learning the Arduino platform for open source electronics and the creation of “Internet of things” devices.</p>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="Home--header">FEATURED PROJECTS</div>
        </div>
        <div className="col-sm-12 col-md-5 offset-md-1">
          <Featured project={this.props.projects[0]}/>
        </div>
        <div className="col-sm-12 col-md-5">
          <Featured project={this.props.projects[1]}/>
        </div>
      </div>
    </section>;
  }
}
