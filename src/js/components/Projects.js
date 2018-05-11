import React from "react";

export default class Projects extends React.Component {
  strip(html){
    var doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  }
  createLink(website) {
    return <h3><a className="Project--link" href={website}>Visit Link</a></h3>;
  }
  render() {
    return <section className="container">
    <div className="Projects">
    <div className="row">
      <div className="col-sm-12" >
        <div className="Projects--header">Projects</div>
      </div>
    </div>
      <div className="row">
            {this.props.projects.map((item, index) => {
              return <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
                <div className="Project">
                  <img className="Project--image" src={item.screenshot ? item.screenshot : undefined} />
                  <h3>{item.title}</h3>
                  <p>{this.strip(item.description)}</p>
                  { (item.website != '') && this.createLink(item.website)}
                </div>
              </div>;
            })}
          </div>
      </div>
    </section>;
  }
}
