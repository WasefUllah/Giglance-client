import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import TaskCard from "./TaskCard";

const BrowseTask = () => {
  const loadedTasks = useLoaderData();
  const [tasks, setTasks] = useState(loadedTasks);

  useEffect(() => {
    setTasks(loadedTasks);
  }, []);

  return (
   
    <div>
      <h1 className="font-semibold text-3xl text-center my-4">All tasks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 my-4">
      
      {
        tasks.map(task => <TaskCard key={task._id} task={task}></TaskCard>)
      }
    </div>
    </div>
  );
};

export default BrowseTask;
