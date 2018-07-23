import React from "react";
import { NavLink } from "react-router-dom";

import "../../styles/Navigation.scss";

export default class Navigation extends React.Component {
  render() {
    return (
      <section className="container">
        <nav className="Navigation">
          <button>
            <NavLink exact to="/" activeClassName="active">
              <h3>Home</h3>
            </NavLink>
          </button>
          <span>&bull;</span>
          <button>
            <NavLink to="/projects" activeClassName="active">
              <h3>Projects</h3>
            </NavLink>
          </button>
          <span>&bull;</span>
          <button>
            <NavLink to="/arduino" activeClassName="active">
              <h3>Arduino</h3>
            </NavLink>
          </button>
          <span>&bull;</span>
          <button>
            <NavLink to="/skills" activeClassName="active">
              <h3>Skills</h3>
            </NavLink>
          </button>
        </nav>
      </section>
    );
  }
}
