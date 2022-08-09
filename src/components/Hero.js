import { Link } from "react-router-dom";
import stickman1 from '../img/stickman1.png'
import stickman2 from '../img/stickman2.png'
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
        <img className="stickman stickman1" src={stickman1} alt="dancing stick man" />
        <img className="stickman stickman2" src={stickman2} alt="dancing stick man" />
      </div>
    </>
  );
};

export default Hero;
