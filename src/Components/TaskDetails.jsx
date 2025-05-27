import React, { useContext, useState } from "react";
import { useLocation, useLoaderData } from "react-router";
import { FaPen, FaGavel } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const TaskDetails = () => {
  const { user } = useContext(AuthContext);

  const task = useLoaderData();
  const location = useLocation();
  const [bidCount, setBidCount] = useState(task.bids.length);

  const isFromMyTasks = location?.state?.from === "/mytask";

  const handleBid = () => {
    if (!task.bids.includes(user.email)) {
      task.bids.push(user.email);
      fetch(`http://localhost:3000/tasks/${task._id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ bids: task.bids }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            fetch(`http://localhost:3000/tasks/${task._id}`)
              .then((res) => res.json())
              .then((data) => console.log(data));
            setBidCount(bidCount + 1);
            Swal.fire({
              title: "Bid is successful!",
              icon: "success",
              draggable: true,
            });
          }
        });
    } else {
      Swal.fire({
        title: "You have already bided!",
        icon: "error",
        draggable: true,
      });
    }
  };

  console.log(task.bids);
  console.log(user.email);

  const handleUpdateBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const taskData = Object.fromEntries(formData.entries());
    fetch(`http://localhost:3000/tasks/${task._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(taskData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Task has updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-4 ">
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-4 dark:bg-gray-500 ">
        <div className="mt-4">
          {isFromMyTasks ? (
            <form
              onSubmit={handleUpdateBtn}
              className="max-w-3xl mx-auto p-6 bg-white shadow-lg shadow-primary  rounded-lg space-y-4 text-base-accent  dark:bg-gray-700"
            >
              <h2 className="text-2xl font-bold text-center text-primary dark:text-secondary">
                Update the task
              </h2>

              <div>
                <label className="label dark:text-white">
                  <span className="label-text font-medium">Task Title</span>
                </label>
                <input
                  name="title"
                  type="text"
                  className="input input-bordered w-full dark:bg-gray-400 dark:text-white "
                  defaultValue={task.title}
                />
              </div>

              <div>
                <label className="label dark:text-white">
                  <span className="label-text font-medium">Category</span>
                </label>
                <select
                  name="category"
                  className="select select-bordered w-full dark:bg-gray-400 dark:text-white "
                  defaultValue={task.category}
                >
                  <option disabled selected>
                    Select a category
                  </option>
                  <option>Web Development</option>
                  <option>Design</option>
                  <option>Writing</option>
                  <option>Marketing</option>
                </select>
              </div>

              <div>
                <label className="label dark:text-white">
                  <span className="label-text font-medium">Description</span>
                </label>
                <textarea
                  name="description"
                  className="textarea textarea-bordered w-full dark:bg-gray-400 dark:text-white "
                  rows="4"
                  placeholder="Describe the task"
                  defaultValue={task.description}
                ></textarea>
              </div>

              <div>
                <label className="label dark:text-white">
                  <span className="label-text font-medium">Deadline</span>
                </label>
                <input
                  name="deadline"
                  type="date"
                  className="input input-bordered w-full dark:bg-gray-400 dark:text-white "
                  defaultValue={task.deadline}
                />
              </div>

              <div>
                <label className="label dark:text-white">
                  <span className="label-text font-medium">Budget</span>
                </label>
                <input
                  name="budget"
                  type="number"
                  min="0"
                  placeholder="Enter budget amount"
                  className="input input-bordered w-full dark:bg-gray-400 dark:text-white "
                  defaultValue={task.budget}
                />
              </div>

              <div>
                <label className="label dark:text-white">
                  <span className="label-text font-medium">Your Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={task.email}
                  className="input input-bordered w-full bg-gray-100 dark:bg-gray-400 dark:text-white "
                  readOnly
                />
              </div>

              <div>
                <label className="label dark:text-white">
                  <span className="label-text font-medium">Your Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  value={task.name}
                  className="input input-bordered w-full bg-gray-100 dark:bg-gray-400 dark:text-white "
                  readOnly
                />
              </div>

              <div className="text-center pt-4">
                <button type="submit" className="btn btn-primary w-full">
                  Update
                </button>
              </div>
            </form>
          ) : (
            <>
              <p className="text-right dark:text-secondary">
                This task has {bidCount} bids.
              </p>
              <h2 className="text-2xl font-bold dark:text-secondary">
                {task.title}
              </h2>
              <p className="text-gray-700 dark:text-white">
                {task.description}
              </p>
              <div className="flex flex-wrap justify-between gap-4 text-sm text-gray-600 dark:text-white">
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

              <button
                onClick={handleBid}
                className="btn  btn-sm flex items-center dark:bg-secondary"
              >
                <FaGavel className="mr-2" /> Place a Bid
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
