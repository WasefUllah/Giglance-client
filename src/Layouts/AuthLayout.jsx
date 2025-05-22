import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto" >
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AuthLayout;
