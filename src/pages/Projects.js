import { useEffect, useState } from "react";
import { ProjectCard } from "../components";
import { ProjectData } from "../data/ProjectData";
import "../css/ProjectCard.css";

const Projects = () => {
  const [allProjects, setAllProjects] = useState([]);


  //add animation delay to project
  useEffect(() => {
    let delay = 0;
    const updatedProjects = [];
    ProjectData.forEach(project => {
      delay += 150;
      updatedProjects.push({ ...project, delay });
      setAllProjects(updatedProjects);
    })

  }, [])



  return (
    <div className="page">
      {/* <div className="page--header slide--up"><h2>My Work</h2></div> */}
      <main className="projects delay">
        {allProjects &&
          allProjects.map((project) => {
            return <ProjectCard project={project} key={project.title} />;
          })}
      </main>
    </div>
  );
};

export default Projects;
