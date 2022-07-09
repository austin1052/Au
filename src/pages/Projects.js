import React from "react";
import { ProjectCard } from "../components";
import { ProjectData } from "../components/ProjectData";
import "../css/ProjectCard.css";

const Projects = () => {
  return (
    <div className="page">
      <h2>Projects</h2>
      <main className="projects">
        {ProjectData.map((project) => {
          return <ProjectCard project={project} key={project.title} />;
        })}
      </main>
    </div>
  );
};

export default Projects;
