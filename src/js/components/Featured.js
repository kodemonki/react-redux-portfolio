import React from "react";

export default class Featured extends React.Component {
  strip(html) {
    var doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  }
  createLink(website) {
    return (
      <h3>
        <a className="Home--featured-link" href={website}>
          Visit Link
        </a>
      </h3>
    );
  }
  getContent() {
    if (this.props.project === undefined) {
      return <h3>Loading...</h3>;
    } else {
      return (
        <div>
          <a className="Home--featured-link" href={this.props.project.website}>
            <img
              className="Home--featured-image"
              alt="featured project"
              src={
                this.props.project.screenshot
                  ? this.props.project.screenshot
                  : undefined
              }
            />
          </a>
          <h3>{this.props.project.title}</h3>
          <p>{this.strip(this.props.project.description)}</p>
        </div>
      );
    }
  }
  render() {
    return <div className="Home--featured">{this.getContent()}</div>;
  }
}
