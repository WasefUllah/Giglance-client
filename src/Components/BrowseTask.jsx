import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const BrowseTask = () => {
  const tasks = useLoaderData();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    // const confirm = window.confirm("Are you sure you want to delete this task?");
    // if (confirm) {
    //   fetch(`http://localhost:3000/tasks/${id}`, {
    //     method: "DELETE",
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log("Deleted:", data);
    //       // Optional: refresh or remove from UI manually
    //     });
    // }
  };

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
              <td>{task.name} ({task.email})</td>
              <td className="flex flex-col lg:flex-row gap-2 justify-center">
                <button
                  className="btn btn-sm btn-info"
                  onClick={() => navigate(`/task/${task._id}`)}
                >
                  See Details
                </button>
                <button
                  className="btn btn-sm btn-error"
                  onClick={() => handleDelete(task._id)}
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

export default BrowseTask;
