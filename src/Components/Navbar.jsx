import React from "react";
import giglance from "../assets/giglance2.png";
import { Link, NavLink } from "react-router";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-11/12 mx-auto my-5">
      <div>
        <NavLink to={"/"}>
          <img className="w-24 h-12 rounded-xl" src={giglance} alt="" />
        </NavLink>
      </div>
      <div>
        <ul className="flex justify-center gap-4 items-center">
          <NavLink to={"/"}>
            <li>Home</li>
          </NavLink>
          <NavLink to={"/addtask"}>
            <li>Add task</li>
          </NavLink>
          <NavLink to={"/browsetask"}>
            <li>Browse task</li>
          </NavLink>
          <NavLink to={"/mytask"}>
            <li>My task</li>
          </NavLink>
        </ul>
      </div>
      <div className="flex justify-center items-center gap-2">
        <NavLink>
          <button className="btn btn-primary">Login</button>
        </NavLink>
        <NavLink>
          <button className="btn btn-primary">Signup</button>
        </NavLink>
        <NavLink>
          <button className="btn btn-primary">Logout</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
