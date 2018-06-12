import React from "react";

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faGoogle from '@fortawesome/fontawesome-free-brands/faGoogle';
import faSkype from '@fortawesome/fontawesome-free-brands/faSkype';

import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';

export const Header = (props) => {
  const textAlignRight = {textAlign: 'right'};
  return <section className="container">
    <div className="Header">
      <div className="row">
        <div className="col-sm-12 col-md-8 col-lg-7">
          <h1>THOMAS JANE</h1>
          <p>HTML5&nbsp;/ CSS3&nbsp;/ JAVASCRIPT&nbsp;/ REACT&nbsp;/ REDUX&nbsp;/ WEBPACK&nbsp;/ NODE&nbsp;/ GULP&nbsp;/ SASS&nbsp;/ AEM&nbsp;/ WORDPRESS&nbsp;/ PHP&nbsp;/ MYSQL</p>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-5" style={textAlignRight}>
          <div className="Header--contact-list">
            <FontAwesomeIcon className="Header--icon" icon={faLinkedin} /> <a href="https://uk.linkedin.com/in/tomjane" target="_blank">https://uk.linkedin.com/in/tomjane</a><br/>
            <FontAwesomeIcon className="Header--icon" icon={faGithub} /> <a href="https://github.com/kodemonki" target="_blank">https://github.com/kodemonki</a><br/>
            <FontAwesomeIcon className="Header--icon" icon={faGoogle} /> <a href="mailto:thekodemonki@gmail.com?Subject=from_site" target="_self">thekodemonki@gmail.com</a><br/>
            <FontAwesomeIcon className="Header--icon" icon={faEnvelope} /> <a href="mailto:kodemonki@hotmail.com?Subject=from_site" target="_self">kodemonki@hotmail.com</a><br/>
            <FontAwesomeIcon className="Header--icon" icon={faSkype} /> <span>kodemonki</span>
            <br/><br/>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
