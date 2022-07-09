import React from "react";
import { Bubble } from '../components';
import "../css/ProjectCard.css";
import * as FaIcons from "react-icons/fa";

const ProjectCard = ({ project }) => {
  console.log(project)
  return (
    <div className="project--container">
      <section className="project">
        <div className="image--container">
          <img src={project.imageSrc} alt={project.imageAlt} />
        </div>
        <h3 className="project--title">{project.title}</h3>
        <div className="language--container">
          {project.languages?.map((language, key) => {
            return <Bubble language={language} key={key} />
          })}
        </div>
        <div className="description--container">
          <div className="project--description">
            {project.description.map((paragraph) => {
              return <p>{paragraph}</p>;
            })}
          </div>
        </div>
        <footer>
          <a href={project.demoLink} className="btn">
            demo
          </a>
          {
            project.githubLink &&
            < a href={project.githubLink} className="project--info">
              <span>View on Github</span> <FaIcons.FaLongArrowAltRight />
            </a>
          }
          {
            project.moreInfo &&
            < a href={project.moreInfoLink} className="project--info">
              View More <FaIcons.FaLongArrowAltRight />
            </a>
          }

        </footer>
      </section>
    </div >
  );
};

export default ProjectCard;
