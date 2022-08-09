import React from "react";
import { ProjectCard } from "../components";
import { ProjectData } from "../data/ProjectData";
import "../css/ProjectCard.css";

const Projects = () => {
  return (
    <div className="page">
      <div className="page--header slide--up"><h2>my projects</h2></div>
      <main className="projects slide--up delay200">
        {ProjectData.map((project) => {
          return <ProjectCard project={project} key={project.title} />;
        })}
      </main>
    </div>
  );
};

export default Projects;
