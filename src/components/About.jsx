import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import portrait from "../images/portrait.jpg";
import html from "../images/logos/html.png";
import css from "../images/logos/css.png";
import react from "../images/logos/react.png";
import node from "../images/logos/nodejs.png";
import ps from "../images/logos/ps.png";
import ai from "../images/logos/ai.png";
import xd from "../images/logos/xd.png";
import git from "../images/logos/git.png";
import atom from "../images/logos/atom.png";
import jira from "../images/logos/jira.png";

export default function About() {
  AOS.init();
  return (
    <div className='about-me' id='about'>
      <div
        data-aos='fade-right'
        data-aos-duration='1000'
        className='about-left'
      >
        <img src={portrait} alt='portrait' className='portrait' />
        <h2 className='part-title'>ABOUT ME</h2>
        <p className='description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ex
          nihil, natus veritatis animi consectetur aperiam nemo illum!
          Asperiores, consequatur. Excepturi est enim nostrum non aliquam,
          dolorum at laborum repudiandae!
        </p>
      </div>
      <div
        data-aos='fade-left'
        data-aos-duration='1000'
        className='about-right'
      >
        <ul>
          <li>
            <img src={react} />
          </li>
          <li>
            <img src={node} />
          </li>
          <li>
            <img src={html} />
          </li>
          <li>
            <img src={css} />
          </li>
          <li>
            <img src={ps} />
          </li>
          <li>
            <img src={ai} />
          </li>
          <li>
            <img src={xd} />
          </li>
          <li>
            <img src={git} />
          </li>
          <li>
            <img src={atom} />
          </li>
          <li>
            <img src={jira} />
          </li>
        </ul>
      </div>
    </div>
  );
}
