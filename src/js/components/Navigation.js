import React from "react";
import { NavLink } from 'react-router-dom';

export default class Navigation extends React.Component {
  render() {
    return <section className="container">
      <nav className="Navigation">
          <button><NavLink exact to='/' activeClassName="active">Home</NavLink></button>
          <button><NavLink to='/projects' activeClassName="active">Projects</NavLink></button>
          <button><NavLink to='/arduino' activeClassName="active">Arduino</NavLink></button>
          <button><NavLink to='/skills' activeClassName="active">Skills</NavLink></button>
      </nav>
    </section>;
  }
}
