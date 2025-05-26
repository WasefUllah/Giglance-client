import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";

const MyTasks = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const loadedTasks = useLoaderData();
  const location = useLocation();

  const myTasks = loadedTasks.filter((task) => task.email === user.email);
  useEffect(() => {
    setTasks(myTasks);
  }, []);

  const navigate = useNavigate();
  const handleDelete = (id, name) => {
    Swal.fire({
      title: `Are you sure to delete, ${name}`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/tasks/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: `${name} has been deleted.`,
                icon: "success",
              });
              const remainingTasks = tasks.filter((task) => task._id !== id);
              setTasks(remainingTasks);
            }
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="overflow-x-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 text-center">My tasks</h2>
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
                <button
                  className="btn btn-sm btn-info"
                  onClick={() => {
                    navigate(`/tasks/${task._id}`, {
                      state: { from: location.pathname },
                    });
                  }}
                >
                  Update
                </button>
                <button
                  className="btn btn-sm btn-error"
                  onClick={() => handleDelete(task._id, task.title)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTasks;
