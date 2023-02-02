import { Link } from "react-router-dom";
// import stickman1 from '../img/stickman1.png'
import stickman2 from '../img/stickman2.png'
import "../css/Hero.css";

const Hero = () => {
  return (
    <div className="page">
      <h1 className="hero">
        {/* <span>Austin </span>
          <span>Cox</span> */}
        Austin Cox
      </h1>
      <div className="hero--container">
        <div>
          <h3>Frontend Web Developer</h3>
          {/* <h3>Thinker</h3>
          <h3>Cat Dad</h3>
          <h3>Capricorn</h3> */}
        </div>
        <Link to="/portfolio" className="view--projects btn btn--large" >view portfolio
        </Link>
        {/* <img className="stickman stickman1" src={stickman1} alt="" /> */}
        <img className="stickman stickman2" src={stickman2} alt="" />
      </div>
    </div>
  );
};

export default Hero;
