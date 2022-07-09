import React from "react";
import { Link } from "react-router-dom";
import "../css/Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero--container">
        <h1 className="hero">
          {/* <span>ROANOKE'S</span>
          <span>HOTTEST</span>
          <span>DANCE CLUB</span> */}
        </h1>
        <Link to="/projects" className="view--projects btn btn--large" >view portfolio
        </Link>
      </div>
    </>
  );
};

export default Hero;
