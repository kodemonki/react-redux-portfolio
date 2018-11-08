import React from "react";

import "../../styles/Projects.scss";

export default class Projects extends React.Component {
  strip(html) {
    var doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  }
  createLink(website) {
    if (website == "") {
      return (
        <h4>
          <div className="Project--link">
            <br />
          </div>
        </h4>
      );
    } else {
      return (
        <h4>
          <a className="Project--link" href={website}>
            Visit Link
          </a>
        </h4>
      );
    }
  }
  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="Projects--introduction">
              <p>
                Here are some of the projects I have been working on over the
                last few years.
              </p>
            </div>
          </div>
        </div>
        <div className="Projects">
          <div className="row">
            {this.props.projects.map((item, index) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
                  <div className="Project">
                    <img
                      className="Project--image"
                      src={item.screenshot ? item.screenshot : undefined}
                    />
                    <h3>{item.title}</h3>
                    <p>{this.strip(item.description)}</p>
                    {this.createLink(item.website)}
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
