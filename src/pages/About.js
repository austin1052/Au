import React from "react";
import { Bubble } from '../components'
import { AboutData } from "../data/AboutData";
import "../css/About.css";

const About = () => {
  return (
    <div className="page">
      <main className="about--page">
        <div className="page--header">
          <h2>hey! i'm austin</h2>
        </div>
        <div className='grid'>
          <div className="about--section--info">
            <h3 className="about--heading">about me</h3>
            <div className="about--me">
              <p>
                I am a Fullstack Web Developer based in Brooklyn, NY. I am a graduate of Fullstack Academy, and I have a passion for creating amazing user experiences and web applications. I have a strong background in customer satisfaction and team management. I am new to the tech world and eager to be part of team and take on new challenges.
              </p>
              <p>
                Contact me and let's see what we can build together.
              </p>
            </div>
            {/* {
                AboutData.info.map((text) => {
                  return <p className="about--me">{text}</p>;
                })
              } */}
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
      </main>
    </div>
  );
};

export default About;