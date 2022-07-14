import React from "react";
import { Link } from 'react-router-dom';
import { Bubble } from '../components';
import "../css/ProjectCard.css";
import * as FaIcons from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const { imageSrc, imageAlt, title, languages, description, demoLink, githubLink, moreInfoLink, buttonText } = project;
  console.log(project)
  return (
    <div className="project--container">
      <section className="project">
        <div className="image--container">
          <img src={imageSrc} alt={imageAlt} />
        </div>
        <h3 className="project--title">{title}</h3>
        <div className="language--container">
          {languages?.map((language, key) => {
            return <Bubble text={language} key={key} />
          })}
        </div>
        <div className="description--container">
          <div className="project--description">
            {description.map((paragraph) => {
              return <p>{paragraph}</p>;
            })}
          </div>
        </div>
        <footer>
          {demoLink !== null ?
            <a href={demoLink} className="btn">
              {buttonText}
            </a>
            : <div></div>

          }
          {
            project.githubLink &&
            <a href={githubLink} className="project--info">
              <span>View on Github</span> <FaIcons.FaLongArrowAltRight />
            </a>
          }
          {
            project.moreInfoLink &&
            <Link to={moreInfoLink} className="project--info">
              <span>View More</span> <FaIcons.FaLongArrowAltRight />
            </Link>
          }

        </footer>
      </section>
    </div >
  );
};

export default ProjectCard;
