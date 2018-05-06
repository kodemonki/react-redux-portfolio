import React from "react";

export default class Featured extends React.Component {
  strip(html){
    var doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  }
  createLink(website) {
    return <h3><a className="Home--featured-link" href={website}>Visit Link</a></h3>;
  }
  getContent() {
    console.log(this.props);
    if(this.props.project === undefined){
      return <h3>Loading...</h3>;
    }else{
      return <div>
        <img className="Home--featured-image" src={this.props.project.screenshot ? this.props.project.screenshot : undefined} />
        <p>{this.strip(this.props.project.description)}</p>
        { (this.props.project.website != '') && this.createLink(this.props.project.website)}
      </div>;
    }
  }
  render(){
    return <div className="Home--featured">
      {this.getContent()}
    </div>;
  }
}
