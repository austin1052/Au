import React from "react";
import { SocialMediaIcons } from "../components";
import { Link } from "react-router-dom";
import { FooterNavData } from "../data/FooterNavData";
import "../css/Footer.css";

const Footer = () => {
  return (
    <>
      {/* <div className="black--grid--small">
        <div className="background--image">
        </div>
      </div> */}
      <footer className="main--footer">
        <div>
          {/* <img src="/images/Austin-logo.png" alt="" className="logo logo--small" /> */}
          <Link to="/" aria-label="homepage" className="logo--link">
            <h1 className="logo logo--small">
              Austin
            </h1>
          </Link>
          {FooterNavData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
          <SocialMediaIcons />
        </div>
      </footer>
    </>
  );
};

export default Footer;
