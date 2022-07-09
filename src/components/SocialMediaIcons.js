import React from "react";
import "../css/SocialMediaIcons.css";
import * as BsIcons from "react-icons/bs";

const SocialMediaIcons = () => {
  return (
    <div className="social--media--links">
      <a
        href="https://github.com/austin1052"
        className="social--media--icon"
        aria-label="Github"
      >
        <BsIcons.BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/austin-cox-424031214/"
        className="social--media--icon"
        aria-label="Linked In"
      >
        <BsIcons.BsLinkedin />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
