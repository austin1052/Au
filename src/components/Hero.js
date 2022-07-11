import React from "react";
import { Link } from "react-router-dom";
import "../css/Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero--container">
        <h1 className="hero">
          <span>Austin Cox</span>
          {/* <span></span> */}
          {/* <span>DANCE CLUB</span> */}
        </h1>
        <h3>Fullstack Web Developer</h3>
        <Link to="/portfolio" className="view--projects btn btn--large" >view portfolio
        </Link>
      </div>
    </>
  );
};

export default Hero;
