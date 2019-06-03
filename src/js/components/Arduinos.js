import React from "react";
import { Helmet } from "react-helmet";

import "../../styles/Arduinos.scss";

export default class Arduinos extends React.Component {
  constructor(props) {
    super(props);
    this.getData();
  }
  getData() {
    if (this.props.arduinos.length === 0) {
      this.props.getData();
    }
  }
  strip(html) {
    var doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  }
  render() {
    return (
      <section className="container">
        <Helmet>
          <title>Arduinos</title>
          <meta
            name="description"
            content="Examples of Arduino by Tom Jane, Developer"
          />
        </Helmet>
        <div className="row">
          <div className="col-sm-12">
            <div className="Arduinos--introduction">
              <p>
                Arduino is an open-source electronic prototyping platform
                enabling users to create interactive electronic objects.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="Arduinos">
            {this.props.arduinos.map((item, index) => {
              return (
                <div key={index} className="Arduino">
                  <div className="col-sm-12">
                    <div className="Arduino--header">{item.title}</div>
                  </div>
                  <div className="col-sm-8 offset-sm-2">
                    <p>{this.strip(item.description)}</p>
                  </div>
                  <div className="col-sm-8 offset-sm-2">
                    <img
                      className="Arduino--image"
                      src={item.screenshot ? item.screenshot : undefined}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
