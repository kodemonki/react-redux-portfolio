import React from "react";
import { Link } from 'react-router-dom'

export const Navigation = (props) => {
  return <section className="container">
    <nav className="Navigation">
        <button className=""><Link to='/' activeclassname="active">Home</Link></button>
        <button className=""><Link to='/projects' activeclassname="active">Projects</Link></button>
        <button className=""><Link to='/arduino' activeclassname="active">Arduino</Link></button>
        <button className=""><Link to='/skills' activeclassname="active">Skills</Link></button>
    </nav>
  </section>;
}
