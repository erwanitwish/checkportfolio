import React from "react";
import Project from "./Project";
import Datas from "../datas/Datas.json";

export default function Portfolio() {
  return (
    <div className='portfolio'>
      <h2 className='part-title'>PORTFOLIO</h2>
      {Datas.map((project) => (
        <Project
          title={project.Title}
          description={project.Description}
          image={project.image}
        />
      ))}
    </div>
  );
}
