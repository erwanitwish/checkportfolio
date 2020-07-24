import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  AOS.init();
  return (
    <div data-aos='fade-right' data-aos-duration='2000' className='contact'>
      <h2 className='part-title title-left' id='contact'>
        CONTACT
      </h2>
      <div className='contact-content'>
        <div className='contact-left'>
          <h3>Erwan Quillec</h3>
          <p>Nantes</p>
        </div>
        <div className='contact-right'>
          <h3>06.61.37.60.63</h3>
          <h3>quillec.erwan@gmail.com</h3>
        </div>
      </div>
    </div>
  );
}
