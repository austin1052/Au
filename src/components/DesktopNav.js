import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavData } from "../data/NavData";
import "../css/DesktopNav.css";

const DesktopNav = () => {
  const location = useLocation();
  return (
    <>
      <nav className="desktop--nav">
        <div className="desktop--logo--container">
          {/* <Link to="/" aria-label="link to home page">
            <img src="/images/Austin-logo.png" alt="Austin logo" className="logo logo--large" />
          </Link> */}
          <Link to="/" aria-label="homepage" className="logo--link">
            <h1 className="logo">
              Austin
            </h1>
          </Link>
        </div>
        <ul className="desktop--nav--menu--items">
          {NavData.map((item, index) => {
            return (
              <li key={index} className={item.cName + " desktop--nav--text" + (location.pathname === item.path ? " active" : "")}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default DesktopNav;
