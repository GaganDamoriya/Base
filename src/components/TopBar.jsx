import React from "react";
import "./style.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Avtar from "../assets/tom.jpg";
import { FaVolleyballBall } from "react-icons/fa";

import { IoIosNotifications } from "react-icons/io";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <span style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <span className="">
            <GiHamburgerMenu />
          </span>
          <span style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <FaVolleyballBall />
            <span>BASE</span>
          </span>
        </span>
        <span className="header2">
          <span>
            <IoIosNotifications size={"1.8rem"} />
            <img src={Avtar} alt="profile-pic" />
          </span>
        </span>
      </div>
    </div>
  );
};

export default TopBar;
