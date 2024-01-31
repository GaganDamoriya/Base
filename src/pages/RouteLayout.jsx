import React from "react";
import "./page.css";
import { Outlet } from "react-router-dom";
import LeftbarRoot from "../components/LeftbarRoot";
import TopBar from "../components/TopBar";

const RouteLayout = () => {
  return (
    <div className="RootLayout">
      <LeftbarRoot />
      <div className="display-div">
        <TopBar />
        <section className="render-outlet">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default RouteLayout;
