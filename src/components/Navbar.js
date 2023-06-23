import { useState } from "react";
import { SocialMediaIcons } from "../components";
import "../css/Navbar.css";
import { NavData } from "../data/NavData";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = ({ setMenuOpen, menuOpen, mobileDisplay }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const toggleContent = () => {
    if (window.innerWidth < 768) setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={sidebar ? "navbar active" : "navbar"}>
        {/* {!mobileDisplay && <div className="spacer"></div>} */}
        <div className="logo--container">
          {/* <Link to="/" aria-label="homepage">
            <img
              src="/images/Austin-logo.png"
              alt="Austin logo"
              className="logo"
            />
          </Link> */}
          <Link to="/" aria-label="homepage" className="logo--link">
            <h1 className="logo">
              Austin
            </h1>
          </Link>
        </div>
        <div className="menu--bars" onClick={toggleContent}>
          <Hamburger
            toggled={sidebar}
            toggle={setSidebar}
          />
        </div>
      </div>
      <nav className={sidebar ? "nav--menu active" : "nav--menu"}>
        <ul className="nav--menu--items">
          {NavData.map((item, index) => {
            const delay = (index * 200) + 700
            return (
              <li
                key={index}
                className="nav--text"
                style={{ transition: delay + "ms" }}
                onClick={() => {
                  showSidebar();
                  toggleContent();
                }}
              >
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <SocialMediaIcons />
      </nav>
    </>
  );
};

export default Navbar;
