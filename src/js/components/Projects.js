import React from "react";

export default class Projects extends React.Component {
  strip(html){
    var doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  }
  render() {
    return <section className="container">
    <div className="Projects">
      <div className="row">
            {this.props.projects.map((item, index) => {
              return <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
                <div className="Project">
                  <img className="Projects--image" src={item.screenshot ? item.screenshot : undefined} />
                  <h3>{item.title}</h3>
                  <p>{this.strip(item.description)}</p>
                </div>
              </div>;
            })}
          </div>
      </div>
    </section>;
  }
}
