import React from "react";
import { Link } from 'react-router-dom'

export const Navigation = (props) => {
  return <section className="container">
    <nav className="Navigation">
        <button className=""><Link to='/'>Home</Link></button>
        <button className=""><Link to='/projects'>Projects</Link></button>
        <button className=""><Link to='/arduino'>Arduino</Link></button>
        <button className=""><Link to='/skills'>Skills</Link></button>
    </nav>
  </section>;
}
