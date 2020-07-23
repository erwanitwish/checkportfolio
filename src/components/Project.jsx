import React from "react";

export default function Project({
  number,
  title,
  description,
  image,
  linkReal,
  linkGitHub,
}) {
  return (
    <div
      data-aos='fade-right'
      data-aos-duration='5000'
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
