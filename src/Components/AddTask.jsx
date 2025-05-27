import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddTask = () => {
  const { user } = useContext(AuthContext);
  const handleSubmitBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const taskData = Object.fromEntries(formData.entries());
    taskData.bids = [];
    // send data to server

    fetch("https://giglance-server.vercel.app/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(taskData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Task added successfully",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="dark:bg-gray-800 py-5">
      <form
        onSubmit={handleSubmitBtn}
        className="max-w-2xl mx-auto dark:bg-gray-800 p-6 bg-white shadow-lg shadow-primary dark:shadow-gray-500  rounded-lg space-y-4 text-base-accent"
      >
        <h2 className="text-2xl font-bold text-center text-primary dark:text-white">
          Post a Task
        </h2>

        <div>
          <label className="label dark:text-white">
            <span className="label-text font-medium">Task Title</span>
          </label>
          <input
            name="title"
            type="text"
            placeholder="Enter task title"
            className="input input-bordered w-full  dark:bg-gray-500 dark:text-white"
            required
          />
        </div>

        <div>
          <label className="label dark:text-white">
            <span className="label-text font-medium">Category</span>
          </label>
          <select
            name="category"
            className="select select-bordered w-full dark:bg-gray-500 dark:text-white"
            required
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
            className="textarea textarea-bordered w-full  dark:bg-gray-500 dark:text-white"
            rows="4"
            placeholder="Describe the task"
            required
          ></textarea>
        </div>

        <div>
          <label className="label dark:text-white">
            <span className="label-text font-medium">Deadline</span>
          </label>
          <input
            name="deadline"
            type="date"
            className="input input-bordered w-full  dark:bg-gray-500 dark:text-white"
            required
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
            className="input input-bordered w-full  dark:bg-gray-500 dark:text-white"
            required
          />
        </div>

        <div>
          <label className="label dark:text-white">
            <span className="label-text font-medium">Your Email</span>
          </label>
          <input
            name="email"
            type="email"
            value={user.email}
            className="input input-bordered w-full bg-gray-100  dark:bg-gray-500 dark:text-white"
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
            value={user.displayName}
            className="input input-bordered w-full bg-gray-100  dark:bg-gray-500 dark:text-white"
            readOnly
          />
        </div>

        <div className="text-center pt-4">
          <button type="submit" className="btn btn-primary w-full">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
