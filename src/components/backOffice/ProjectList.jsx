import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProjectList() {
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
    <div>
      {Projects.map((project) => {
        return <p>{project.title}</p>;
      })}
    </div>
  );
}
