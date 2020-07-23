import React from "react";
import Project from "./Project";
import Datas from "../datas/Datas.json";

export default function Portfolio() {
  return (
    <div className='portfolio'>
      <h2 className='part-title title-right'>PORTFOLIO</h2>
      {Datas.map((project) => (
        <Project
          number={project.Number}
          title={project.Title}
          description={project.Description}
          image={project.image}
          linkReal={project.LinkReal}
        />
      ))}
    </div>
  );
}
