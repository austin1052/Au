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
              {
                AboutData.info.map((text) => {
                  return <p className="about--me">{text}</p>;
                })
              }
            </div>
            <div className="image--container">
              <img src="/austin5.jpg" alt="" />
            </div>
          </div>
        </section>
        <section className="about--section">
          <div className="page--header">
            <h2>skills</h2>
          </div>
          <div className="skills--section--info">
            {
              AboutData.skills.map((text) => {
                return <Bubble text={text} />;
              })
            }
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;


{/* <div className="page" id="about--page">
      <main>
        {AboutData.map(({ info, skills }) => {
          return (
            <>
              <section className={grid ? "about--section grid" : "about--section"}>
                <div className="info--container">
                  <div className="page--header"><h2>{title}</h2></div>
                  <div className="section--info">
                    {
                      info !== null &&
                      info.map((text) => {
                        return <p className="about--me">{text}</p>;
                      })
                    }
                    {skills !== null &&
                      skills.map((text) => {
                        return <Bubble text={text} />;
                      })}
                  </div>
                </div>
                {
                  image !== null &&
                  <div className="image--container">
                    <img src={image} alt="" />
                  </div>
                }
              </section>
            </>
          );
        })}
      </main>
    </div> */}