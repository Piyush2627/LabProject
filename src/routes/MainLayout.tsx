import React from "react";
import Navigation from "../components/common/Navigation/Navigation";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default MainLayout;
