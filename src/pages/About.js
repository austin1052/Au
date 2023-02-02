import React from "react";
import { Bubble } from '../components'
import { AboutData } from "../data/AboutData";
import "../css/About.css";

const About = () => {
  return (
    <div className="page">
      <main className="about--page">
        <div className="page--header slide--up">
          <h2>hey! i'm austin</h2>
        </div>
        <div className='grid'>
          <div className="about--section--container slide--up delay">
            <h3 className="about--heading">about me</h3>
            <section className="about--section">
              <p>
                I am a Frontend Web Developer based in Brooklyn, NY. I am a graduate of Fullstack Academy, and I have a passion for creating amazing user experiences and web applications. I have a strong background in customer satisfaction and team management. I am new to the tech world and eager to be part of team and take on new challenges.
              </p>
              <p>
                Contact me and let's see what we can build together.
              </p>
            </section>
            <section className="about--section">
              <h3 className="about--heading">skills</h3>
              <div className="skills--container">
                {
                  AboutData.skills.map((text) => {
                    return <Bubble text={text} />;
                  })
                }
              </div>
            </section>
            <section className="about--section">
              <h3 className="about--heading">contact</h3>
              <div className="contact--container">
                <div>
                  <h4>Email</h4>
                  <p>austin1052@gmail.com</p>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>276-733-1052</p>
                </div>
              </div>
            </section>
          </div>
          <div className="image--container slide--up delay">
            <img src="/images/austin2.png" alt="" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;