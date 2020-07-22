import React from "react";

export default function Project({
  title,
  description,
  image,
  linkReal,
  linkGitHub,
}) {
  return (
    <div classsName='project'>
      <img className='project-image' src={require(`../images/${image}`)} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
