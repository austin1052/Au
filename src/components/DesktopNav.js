import React from "react";
import { Link } from "react-router-dom";
import { NavData } from "../data/NavData";
import "../css/DesktopNav.css";

const DesktopNav = () => {
  return (
    <>
      <nav className="desktop--nav">
        <ul className="desktop--nav--menu--items">
          {NavData.map((item, index) => {
            return (
              <li key={index} className={item.cName + " desktop--nav--text"}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <div className="desktop--logo--container">
          <Link to="/" aria-label="link to home page">
            <img src="/images/Austin-logo.png" alt="Austin logo" className="logo logo--large" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default DesktopNav;
