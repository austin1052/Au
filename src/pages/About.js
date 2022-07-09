import React from "react";
import { AboutData } from "../components/AboutData";
import "../css/About.css";

const About = () => {
  return (
    <div className="page" id="about--page">
      <main>
        {AboutData.map(({ title, info, image }) => {
          return (
            <section className="about--section">
              <div className="info--container">
                <h2>{title}</h2>
                <div className="section--info">
                  {info.map((paragraph) => {
                    return <p>{paragraph}</p>;
                  })}
                </div>
              </div>
              <div className="image--container">
                <img src={image} alt="" />
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
};

export default About;
