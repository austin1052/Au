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
              {/* <p>
                I am a Frontend Web Developer based in Brooklyn, NY who has a passion for creating amazing user experiences and web applications that make life easier and more fun.
                I have a strong background in customer service and team management.
              </p> */}
              <p>
                {`Two things:
1.   I have always loved arts and crafts.
2. My favorite class in school was chemistry.`}
              </p>

              <p>
                I love building something beautiful, and I love solving problems; web development is a perfect marriage of the two.
              </p>

              <p>
                I am a graduate of Fullstack Academy where I learned the skills to build awesome web applications using Javascript, CSS, React, Node.js, PostgreSQL, and more. I am always looking to learn and become a better developer.
              </p>

              <p>
                I have spent most of my professional life working retail management at Wegmans Food Markets and it taught me the most important part of running a successful business; caring for your employees and showing the same respect to your day one employees as you do your CEO.
              </p>

              <p>
                I have experience leading large teams, hiring and training new employees, and managing a store that handles millions in sales every week. I am comfortable working in an environment where plans change often, new ideas are necessary, and input is gladly taken from any employee.
              </p>

              <p>
                I am open to career and networking opportunities and appreciate any opportunity to connect.
              </p>

              <p>
                Contact me. Let's build something!
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
      </main >
    </div >
  );
};

export default About;