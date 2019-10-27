import React from "react";
import { Helmet } from "react-helmet";

import "../../styles/Printing3D.scss";

const Img1 = require("../../images/3dprint_1.jpg");
const Img2 = require("../../images/3dprint_2.jpg");
const Img3 = require("../../images/3dprint_3.jpg");
const Img4 = require("../../images/3dprint_4.jpg");
const Img5 = require("../../images/3dprint_5.jpg");
const Img6 = require("../../images/3dprint_6.jpg");

export default class Printing3D extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <Helmet>
          <title>Printing3D</title>
          <meta
            name="description"
            content="Examples of 3D Printing by Tom Jane, Developer"
          />
        </Helmet>
        <div className="Printing3D--introduction">
          <p> </p>
          <h4>
            <strong>3D Printing - London</strong>
          </h4>
          <p>
            These are just a few of my experements, in product design and 3d
            printing.
          </p>
        </div>
        <img className="Printing3D--image" src={Img1} />
        <div className="Printing3D--header">First Print - Test</div>
        <img className="Printing3D--image" src={Img2} />
        <div className="Printing3D--header">Second Print - Phone Stand</div>
        <img className="Printing3D--image" src={Img3} />
        <div className="Printing3D--header">Third Print - Pedal Board</div>
        <img className="Printing3D--image" src={Img4} />
        <div className="Printing3D--header">Fourth Print - Spice Rack</div>
        <img className="Printing3D--image" src={Img5} />
        <div className="Printing3D--header">Fifth Print - Speaker Stands</div>
        <img className="Printing3D--image" src={Img6} />
      </section>
    );
  }
}
