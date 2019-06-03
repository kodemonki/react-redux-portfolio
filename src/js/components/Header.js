import React from "react";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";

import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";
import faLinkedin from "@fortawesome/fontawesome-free-brands/faLinkedin";
import faGoogle from "@fortawesome/fontawesome-free-brands/faGoogle";
import faSkype from "@fortawesome/fontawesome-free-brands/faSkype";

import faEnvelope from "@fortawesome/fontawesome-free-regular/faEnvelope";

import "../../styles/Header.scss";

export const Header = props => {
  const textAlignRight = { textAlign: "right" };

  return (
    <section className="container">
      <div className="Header">
        <div className="row">
          <div className="Header--left-section">
            <h1>THOMAS JANE</h1>
            <div className="Header--skill-list">
              HTML5&nbsp;/ CSS3&nbsp;/ JAVASCRIPT&nbsp;/ REACT&nbsp;/
              REDUX&nbsp;/ PWA&nbsp;/ WEBPACK&nbsp;/ NODE&nbsp;/ GULP&nbsp;/
              SASS&nbsp;/ AEM&nbsp;/ WORDPRESS&nbsp;/ PHP&nbsp;/ MYSQL
            </div>
          </div>
          <div className="Header--right-section" style={textAlignRight}>
            <div className="Header--contact-list">
              <FontAwesomeIcon className="Header--icon" icon={faGithub} />{" "}
              <a href="https://github.com/kodemonki" target="_blank">
                www.github.com/kodemonki
              </a>
              <br />
              <FontAwesomeIcon
                className="Header--icon"
                icon={faLinkedin}
              />{" "}
              <a href="https://uk.linkedin.com/in/tomjane" target="_blank">
                uk.linkedin.com/in/tomjane
              </a>
              <br />
              <FontAwesomeIcon className="Header--icon" icon={faGoogle} />{" "}
              <a
                href="mailto:thekodemonki@gmail.com?Subject=from_site"
                target="_self"
              >
                thekodemonki@gmail.com
              </a>
              <br />
              <FontAwesomeIcon
                className="Header--icon"
                icon={faEnvelope}
              />{" "}
              <a
                href="mailto:kodemonki@hotmail.com?Subject=from_site"
                target="_self"
              >
                kodemonki@hotmail.com
              </a>
              <br />
              <FontAwesomeIcon className="Header--icon" icon={faSkype} />{" "}
              <span>kodemonki</span>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
