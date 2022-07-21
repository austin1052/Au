import React from "react";
import { Link } from "react-router-dom";
import "../css/Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero--container">
        <h1 className="hero">
          <span>Austin</span>
          <span>Cox</span>
        </h1>
        <h3>Frontend Web Developer</h3>
        <Link to="/portfolio" className="view--projects btn btn--large" >view portfolio
        </Link>
      </div>
    </>
  );
};

export default Hero;
