import React from "react";
import { useLocation, useLoaderData, useNavigate } from "react-router";
import { FaPen, FaGavel } from "react-icons/fa";

const TaskDetails = () => {
  const task = useLoaderData();
  const location = useLocation();
  const navigate = useNavigate();

  const isFromMyTasks = location?.state?.from === "/mytask";
  

  const handleUpdate = () => {
    navigate(`/updatetask/${task._id}`);
  };

  const handleBid = () => {
    // Your bid logic
    alert("You clicked to bid!");
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
        <h2 className="text-2xl font-bold">{task.title}</h2>
        <p className="text-gray-700">{task.description}</p>
        <div className="flex flex-wrap justify-between gap-4 text-sm text-gray-600">
          <p>
            <strong>Deadline:</strong> {task.deadline}
          </p>
          <p>
            <strong>Budget:</strong> ${task.budget}
          </p>
          <p>
            <strong>Posted By:</strong> {task.name} ({task.email})
          </p>
        </div>

        
        <div className="mt-4">
          {isFromMyTasks ? (
            <>
              <button
                onClick={handleUpdate}
                className="btn btn-warning btn-sm mb-4"
              >
                <FaPen className="mr-2" /> Update Task
              </button>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <h3 className="font-semibold text-blue-700 mb-2">
                  How Bidding Works
                </h3>
                <p>
                  Freelancers can view your task and place bids. Choose the most
                  suitable offer based on expertise, timeline, and price.
                </p>
              </div>
            </>
          ) : (
            <button
              onClick={handleBid}
              className="btn btn-success btn-sm flex items-center"
            >
              <FaGavel className="mr-2" /> Place a Bid
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
