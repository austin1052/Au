import React from "react";
import { SocialMediaIcons } from "../components";
import { Link } from "react-router-dom";
import { FooterNavData } from "./FooterNavData";
import "../css/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="black--grid--small">
        <div className="background--image">
          <h2>dance ur heart out, bestie 🖤</h2>
        </div>
      </div>
      <footer className="main--footer">
        <div>
          <img src="/Austin-logo.png" alt="" className="logo logo--small" />
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
