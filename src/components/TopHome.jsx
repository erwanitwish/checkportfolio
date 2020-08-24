import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import image from "../images/home2.jpg";

export default function TopHome() {
  AOS.init();
  return (
    <div className='top-home'>
      <img
        data-aos='fade-zoom-in'
        data-aos-duration='2000'
        src={image}
        alt='me'
        className='background'
      ></img>
      <div data-aos='fade-right' data-aos-duration='2000' className='title'>
        <h1 className='name'>
          ERWAN <br />
          QUILLEC
        </h1>
        <p className='subtitle'>
          Développeur web <br></br> Product Owner
        </p>
      </div>
      <div className='arrow'>Scroll</div>
    </div>
  );
}
