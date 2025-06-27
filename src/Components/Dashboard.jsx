import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const loadedTasks = useLoaderData();
  const myTasks = loadedTasks.filter((task) => task.email === user.email);
  useEffect(() => {
    setTasks(myTasks);
  }, []);

  return (
    <div className=" shadow w-11/12 mx-auto min-h-[550px] flex f justify-center items-center">
      <div className="flex justify-center items-center gap-10">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className=" font-semibold ">My Added Tasks</div>
          <div className="stat-value text-primary">{tasks.length}</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar avatar-online">
              <div className="w-16 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
          </div>
          <div className="stat-value">{user?.displayName}</div>
          <div>{user?.email}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
