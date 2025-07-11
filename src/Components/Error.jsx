import React from "react";
import { NavLink } from "react-router";
import img from "../assets/errorimg.png";
const Error = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col justify-center items-center gap-6">
      <img src={img} alt="" className="rounded-lg w-full h-[480px]" />
      <h1 className="text-4xl text-red-600 ">404 - page not found</h1>
      <p>Opss!! the page you are looking for doesn't exists</p>

      <NavLink to={"/"}>
        <button className="btn btn-primary bg-primary text-secondary border-none">
          Go back to Home
        </button>
      </NavLink>
    </div>
  );
};

export default Error;
