import React from "react";
import { Helmet } from "react-helmet";

import "../../styles/Skills.scss";

export const Skills = props => {
  return (
    <section>
      <Helmet>
        <title>Skills</title>
        <meta
          name="description"
          content="Examples of Skills by Tom Jane, Developer"
        />
      </Helmet>
      <div className="Skills">
        <div className="Skills--introduction">
          <p>
            I have been freelancing commercially for roughly 20 years and coding
            for fun for over 30 years.
          </p>
        </div>
        <div className="Skills--header">Current Front End Stack</div>
        <div className="">
          <ul>
            <li>Javascript ES6 ES5 Vanilla</li>
            <li>Single Page Applications</li>
            <li>Progressive Web Apps</li>
            <li>React</li>
            <li>Redux</li>
            <li>Webpack</li>
            <li>Babel</li>
            <li>Type-script</li>
            <li>Jest</li>
            <li>GSAP</li>
          </ul>
        </div>
        <div className="Skills--header">Core Languages</div>
        <div className="">
          <ul>
            <li>HTML5 / CSS3 - WC3 standard ( 10 years )</li>
            <li>Javascript ( 10 years )</li>
            <li>PHP 4-5 OOP ( 5 years )</li>
            <li>MySql 4-5 ( 5 years )</li>
            <li>Adobe Flash ( 12 years )</li>
          </ul>
        </div>
        <div className="Skills--header">Frameworks</div>
        <div className="">
          <ul>
            <li>React ( 2 year )</li>
            <li>Redux ( 2 year )</li>
            <li>JQuery ( 5 years )</li>
            <li>Backbone ( 1 years )</li>
            <li>GSAP ( 5 years )</li>
            <li>Bootstrap ( 5 years )</li>
          </ul>
        </div>
        <div className="Skills--header">CMS</div>
        <div className="">
          <ul>
            <li>AEM ( 2 year )</li>
            <li>WordPress ( 5 years )</li>
            <li>Umbraco ( 1 year )</li>
            <li>Tridion ( 1 year )</li>
          </ul>
        </div>
        <div className="Skills--header">APIS</div>
        <div className="">
          <ul>
            <li>Facebook - Javascript and PHP ( 2 years )</li>
            <li>GoogleMaps - Javascript ( 2 years )</li>
            <li>Twitter - Javascript ( 2 years )</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
