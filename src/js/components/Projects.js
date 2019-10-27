import React from "react";
import { Helmet } from "react-helmet";

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
      <section>
        <Helmet>
          <title>Projects</title>
          <meta
            name="description"
            content="Examples of Projects by Tom Jane, Developer"
          />
        </Helmet>
        <div className="Projects--introduction">
          <p>
            Here are some of the projects I have been working on over the last
            few years.
          </p>
        </div>
        <div className="Projects">
          {this.props.projects.map((item, index) => {
            return (
              <div className="Project" key={index}>
                {item.website !== "" && (
                  <a href={item.website}>
                    <img
                      className="Project--image"
                      src={item.screenshot ? item.screenshot : undefined}
                    />
                  </a>
                )}
                {item.website === "" && (
                  <img
                    className="Project--image"
                    src={item.screenshot ? item.screenshot : undefined}
                  />
                )}
                <h3>{item.title}</h3>
                <p>{this.strip(item.description)}</p>
                {this.createLink(item.website)}
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}
