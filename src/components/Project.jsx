import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Project({
  number,
  title,
  description,
  image,
  linkReal,
  linkGitHub,
}) {
  AOS.init();
  return (
    <div
      data-aos='fade-right'
      data-aos-duration='3000'
      className='project'
      key={title}
    >
      <img
        className='project-image'
        alt='project overview'
        src={require(`../images/${image}`)}
      />
      <section className='project-details'>
        <h3 className='project-title'>{title}</h3>
        <p className='project-description'>{description}</p>
        <a href={linkReal} target='blank'>
          Voir le site
        </a>
      </section>
    </div>
  );
}
