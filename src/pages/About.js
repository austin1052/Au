import React from "react";
import { Bubble } from '../components'
import { AboutData } from "../data/AboutData";
import "../css/About.css";

const About = () => {
  return (
    <div className="page" id="about--page">
      <main>
        <section className="about--section">
          <div className="page--header">
            <h2>hey! i'm austin</h2>
          </div>
          <div className='grid'>
            <div className="about--section--info">
              <h3 className="about--heading">about me</h3>
              {
                AboutData.info.map((text) => {
                  return <p className="about--me">{text}</p>;
                })
              }
              <h3 className="about--heading">skills</h3>
              <div className="skills--container">
                {
                  AboutData.skills.map((text) => {
                    return <Bubble text={text} />;
                  })
                }
              </div>
            </div>
            <div className="image--container">
              <img src="/images/austin2.png" alt="" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;