import React from "react";
import "./style.css";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoDiscord } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaVolleyballBall } from "react-icons/fa";

const LeftbarLandingpage = () => {
  return (
    <>
      <div className="leftbar-heading">
        <div className="inner">
          <div className="Logo">
            <FaVolleyballBall />
          </div>
          <div className="Logo-head">BASE</div>
          <div className="social-handles">
            <FaGithub />
            <AiFillTwitterCircle />
            <IoLogoDiscord />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div className="navbar">
        <FaVolleyballBall />
        <span>BASE</span>
      </div>
    </>
  );
};

export default LeftbarLandingpage;
