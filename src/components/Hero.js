import { Link } from "react-router-dom";
import stickman2 from '../img/stickman2.png'
import "../css/Hero.css";

const aboutList = ["Fullstack Engineer", "Thinker", "Cat Dad", "Plant Lover", "Capricorn", "Problem Solver"]

const Hero = () => {

  let delay = 0;

  return (
    <div className="page">
      <div className="hero--container">
        <div>
          {
            aboutList.map((item, i) => {
              delay = i * 150
              return (
                <h3 style={{ animationDelay: delay + "ms" }}>{item}</h3>
              )
            })
          }
        </div>
        <Link to="/about" style={{ animationDelay: (delay + 800) + "ms" }} className="view--projects btn btn--large" >Learn More</Link>
        <img className="stickman stickman2" src={stickman2} alt="" />
      </div>
    </div>
  );
};

export default Hero;
