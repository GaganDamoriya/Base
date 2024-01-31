import React from "react";
import { sidetabs } from "./constant";
import { FaVolleyballBall } from "react-icons/fa";
import { useLocation, NavLink } from "react-router-dom";
const LeftbarRoot = () => {
  const { pathname } = useLocation();
  return (
    <div className="leftbarroot">
      <div className="heading2">
        <FaVolleyballBall />
        <span>BASE</span>
      </div>
      <div className="displayLefttabs">
        {sidetabs.map((tab, i) => {
          const isActive = pathname === tab.path;
          return (
            <NavLink
              key={i}
              className={`tabss ${isActive ? "aactive" : ""}`}
              to={tab.path}
            >
              <span className="tab-span">
                {tab.icon}
                {tab.name}
              </span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default LeftbarRoot;
