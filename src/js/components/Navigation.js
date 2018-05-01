import React from "react";
import { Link } from 'react-router-dom'

export const Navigation = (props) => {
  return <section className="container">
    <nav className="Navigation">
        <button className=""><Link to='/' activeClassName="active">Home</Link></button>
        <button className=""><Link to='/projects' activeClassName="active">Projects</Link></button>
        <button className=""><Link to='/arduino' activeClassName="active">Arduino</Link></button>
        <button className=""><Link to='/skills' activeClassName="active">Skills</Link></button>
    </nav>
  </section>;
}
