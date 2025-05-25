import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const BrowseTask = () => {
  const loadedTasks = useLoaderData();
  const [tasks, setTasks] = useState(loadedTasks);

  const navigate = useNavigate();
  useEffect(()=>{
    setTasks(loadedTasks);

  },[])


  return (
    <div className="overflow-x-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 text-center">All Tasks</h2>
      <table className="table table-zebra w-full text-sm lg:text-base">
        <thead className="bg-primary text-white">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Category</th>
            <th>Deadline</th>
            <th>Budget</th>
            <th>Posted By</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((task, index) => (
            <tr key={task._id}>
              <th>{index + 1}</th>
              <td>{task.title}</td>
              <td>{task.category}</td>
              <td>{task.deadline}</td>
              <td>${task.budget}</td>
              <td>
                {task.name} ({task.email})
              </td>
              <td className="flex flex-col lg:flex-row gap-2 justify-center">
                <Link to={`/tasks/${task._id}`}>
                <button
                  className="btn btn-sm btn-info"
                  // onClick={() => navigate(`/tasks/${task._id}`)}
                >
                  See Details
                </button>
                </Link>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BrowseTask;
