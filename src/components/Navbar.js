import React, { useState } from "react";
import { SocialMediaIcons } from "../components";
import "../css/Navbar.css";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = ({ setMenuOpen, menuOpen }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const toggleContent = () => {
    if (window.innerWidth < 768) setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={sidebar ? "navbar active" : "navbar"}>
        <div className="logo--container">
          <Link to="/" aria-label="The Park homepage">
            <img
              src="/Austin-logo.png"
              alt="Austin logo"
              className="logo"
            />
          </Link>
        </div>
        <div onClick={toggleContent}>
          <Hamburger
            toggled={sidebar}
            toggle={setSidebar}
            className="menu-bars"
          />
        </div>
      </div>
      <nav className={sidebar ? "nav--menu active" : "nav--menu"}>
        <ul className="nav--menu--items">
          {SidebarData.map((item, index) => {
            return (
              <li
                key={index}
                className={item.cName}
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
