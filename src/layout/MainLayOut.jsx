import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const MainLayOut = () => {
  return (
    <div className="">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayOut;
