import React from "react";
import giglance from "../assets/giglance2.png";
import { Link, NavLink } from "react-router";
const Navbar = () => {
  return (
    <div className=" bg-primary">
      <div className="flex justify-between items-center w-11/12 mx-auto py-5">
        <div>
          <NavLink to={"/"}>
            <img className="md:w-24 md:h-12 w-16 h-10 rounded-xl" src={giglance} alt="" />
          </NavLink>
        </div>
        <div>
          <ul className="flex justify-center text-white lg:gap-4 gap-1 md:gap-2 items-center">
            <NavLink to={"/"}>
              <li className="lg:px-2 px-1  lg:py-1 rounded-2xl text-xs lg:text-lg">
                Home
              </li>
            </NavLink>
            <NavLink to={"/addtask"}>
              <li className="lg:px-2 px-1  lg:py-1 rounded-2xl text-xs lg:text-lg">
                Add task
              </li>
            </NavLink>
            <NavLink to={"/browsetask"}>
              <li className="lg:px-2 px-1  lg:py-1 rounded-2xl text-xs lg:text-lg">
                Browse task
              </li>
            </NavLink>
            <NavLink to={"/mytask"}>
              <li className="lg:px-2 px-1  lg:py-1 rounded-2xl text-xs lg:text-lg">
                My task
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="flex justify-center  items-center gap-2">
          <NavLink to={"/auth/login"}>
            <button className="lg:btn btn-xs btn-secondary text-primary">Login</button>
          </NavLink>
          <NavLink to={"/auth/signup"}>
            <button className="lg:btn btn-xs btn-secondary text-primary">Signup</button>
          </NavLink>
          <NavLink>
            <button className="lg:btn btn-xs btn-secondary text-primary">Logout</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
