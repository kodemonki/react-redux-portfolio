import React from "react";
import { NavLink } from "react-router-dom";

import "../../styles/Navigation.scss";

export default class Navigation extends React.Component {
  render() {
    return (
      <section className="container">
        <nav className="Navigation">
          <NavLink exact to="/" activeClassName="active">
            <h3>Home</h3>
          </NavLink>

          <span>&bull;</span>

          <NavLink to="/projects" activeClassName="active">
            <h3>Projects</h3>
          </NavLink>

          <span>&bull;</span>

          <NavLink to="/events" activeClassName="active">
            <h3>Events</h3>
          </NavLink>

          <span>&bull;</span>

          <NavLink to="/arduino" activeClassName="active">
            <h3>Arduino</h3>
          </NavLink>

          <span>&bull;</span>

          <NavLink to="/skills" activeClassName="active">
            <h3>Skills</h3>
          </NavLink>
        </nav>
      </section>
    );
  }
}
