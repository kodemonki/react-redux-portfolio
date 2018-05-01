import React from "react";

export const Dumb = (props) => {
  return <div>
    <div className="App">
      <h2>dumb stateless componet</h2>
      <p>Props from Redux : {props.initialised}</p>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            One of three columns
          </div>
          <div className="col-sm">
            One of three columns
          </div>
          <div className="col-sm">
            One of three columns
          </div>
        </div>
      </div>
    </div>
  </div>;
}
