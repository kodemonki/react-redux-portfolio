import React from "react";

export const Header = (props) => {
  const textAlignRight = {textAlign: 'right'};
  return <section className="container">
    <div className="Header">
      <div className="row">
        <div className="col-sm-6">
          <h1>THOMAS JANE</h1>
        </div>
        <div className="col-sm-6" style={textAlignRight}>
        <br/>
          <a href="https://uk.linkedin.com/in/tomjane" target="_blank">linkedIn : https://uk.linkedin.com/in/tomjane</a><br/>
          <a href="https://github.com/kodemonki" target="_blank">gitHub : https://github.com/kodemonki</a><br/>
          <a href="mailto:thekodemonki@gmail.com?Subject=from_site" target="_self">gmail : thekodemonki@gmail.com</a><br/>
          <a href="mailto:kodemonki@hotmail.com?Subject=from_site" target="_self">email : kodemonki@hotmail.com</a><br/>
          <span>skype : kodemonki</span>
        </div>

      </div>
      <div className="row">
        <div className="col-sm-6">
        <p>HTML5 / CSS3 / JAVASCRIPT / REACT / REDUX / AEM / WORDPRESS / PHP / MYSQL / NODE / GULP / SASS / WEBPACK / ARDUINO</p>
        </div>
      </div>
    </div>
  </section>;
}
