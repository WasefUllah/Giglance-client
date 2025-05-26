import React, { useContext } from "react";
import giglance from "../assets/Giglance.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";
const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const handleLouOutBtn = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" bg-primary">
      <Tooltip id="my-tooltip" />
      <div className="flex justify-between items-center w-11/12 mx-auto py-5">
        <div>
          <NavLink to={"/"}>
            <img
              className="md:w-18  w-12  rounded-full"
              src={giglance}
              alt=""
            />
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
            <NavLink to={"/tasks"}>
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
          {!user ? (
            <div className="flex justify-center items-center gap-2">
              <NavLink to={"/auth/login"}>
                <button className="lg:btn btn-xs btn-secondary text-primary">
                  Login
                </button>
              </NavLink>
              <NavLink to={"/auth/signup"}>
                <button className="lg:btn btn-xs btn-secondary text-primary">
                  Signup
                </button>
              </NavLink>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-4">
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user.displayName}
                data-tooltip-place="top"
              >
                <img
                  src={user?.photoURL}
                  alt=""
                  className="md:w-16 w-13 rounded-full"
                />
              </a>
              <Tooltip id="my-tooltip" />
              <NavLink>
                <button
                  onClick={handleLouOutBtn}
                  className="lg:btn btn-xs btn-secondary text-primary"
                >
                  Logout
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
