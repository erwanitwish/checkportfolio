import React, { useState, useEffect } from "react";
import axios from "axios";
import Project from "./Project";
import Datas from "../datas/Datas.json";

export default function Portfolio() {
  const [error, setError] = useState();
  const [Projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const projectsList = await axios.get(`http://localhost:8080/project`);
        setProjects(projectsList.data);
      } catch (err) {
        setError(err);
      }
    };
    getProjects();
  }, []);

  return (
    <div className='portfolio'>
      <h2 className='part-title title-right'>PORTFOLIO</h2>
      {Projects.map((project) => (
        <Project
          number={project.Number}
          title={project.title}
          description={project.description}
          image={project.image}
          linkReal={project.link}
        />
      ))}
    </div>
  );
}
