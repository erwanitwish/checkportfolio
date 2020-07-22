import React from "react";
import LinkedIn from "../images/logos/linkedin.svg";
import Github from "../images/logos/github.svg";
import LogoPerso from "../images/logos/logo_perso.svg";

export default function Overlay() {
  return (
    <div className='overlay'>
      <div className='nav-top'>
        <div className='logo'>
          <img src={LogoPerso} />
        </div>
        <div className='menu'>
          <ul>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className='nav-bottom'>
        <div className='socials'>
          <ul>
            <li>
              <a
                href='https://www.linkedin.com/in/erwan-quillec/'
                target='blank'
              >
                <img src={LinkedIn} />
              </a>
            </li>
            <li>
              <a href='https://github.com/erwanitwish' target='blank'>
                <img src={Github} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
