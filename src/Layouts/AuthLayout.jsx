import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="dark:bg-gray-800 min-h-screen">
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto dark:bg-gray-800" >
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AuthLayout;
