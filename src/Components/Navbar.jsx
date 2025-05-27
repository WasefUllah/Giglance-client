import React, { useContext, useEffect, useState } from "react";
import giglance from "../assets/Giglance.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const handleLouOutBtn = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("savedTheme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      localStorage.setItem("savedTheme", "light");
      setTheme("light");
    }

    theme === "light"
      ? document.documentElement.setAttribute("data-theme", "light")
      : document.documentElement.setAttribute("data-theme", "dark");
  }, [theme]);

  const handleThemeChange = () => {
    const newSavedTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("savedTheme", newSavedTheme);
    setTheme(newSavedTheme);
  };

  return (
    <div className=" bg-primary dark:bg-gray-800">
      <Tooltip id="my-tooltip" />
      <div className="flex justify-between items-center gap-1 md:w-11/12 mx-auto py-5">
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
          <ul className="flex justify-center text-white gap-1 lg:gap-4  md:gap-2 items-center">
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
          {theme === "light" ? (
            <IoSunny
              className="w-[15px] h-auto md:w-[20px] text-amber-500 mr-2 md:mr-4"
              onClick={handleThemeChange}
            />
          ) : (
            <FaMoon
              className="w-[15px] h-auto md:w-[20px] rotate-y-180 text-white mr-2 md:mr-4"
              onClick={handleThemeChange}
            />
          )}

          {!user ? (
            <div className="flex justify-center items-center gap-2">
              <NavLink to={"/auth/login"}>
                <button className="lg:btn btn-xs btn-secondary text-xs sm:px-1 lg:text-lg   text-primary" >
                  Login
                </button>
              </NavLink>
              <NavLink to={"/auth/signup"}>
                <button className="lg:btn btn-xs btn-secondary text-xs sm:px-1 lg:text-lg   text-primary">
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
                  alt="user photo"
                  className="md:w-16 w-13 rounded-full"
                />
              </a>
              <Tooltip id="my-tooltip" />
              <NavLink>
                <button
                  onClick={handleLouOutBtn}
                  className="lg:btn btn-xs btn-secondary text-xs sm:px-1 lg:text-lg   text-primary"
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
