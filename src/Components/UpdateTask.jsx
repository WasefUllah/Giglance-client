import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateTask = () => {
  const user = useLoaderData();
  const handleUpdateBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const taskData = Object.fromEntries(formData.entries());
    fetch(`http://localhost:3000/tasks/${user._id}`, {
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
    <div>
      <form
        onSubmit={handleUpdateBtn}
        className="max-w-2xl mx-auto p-6 bg-white shadow-lg shadow-primary my-5 rounded-lg space-y-4 text-base-accent"
      >
        <h2 className="text-2xl font-bold text-center text-primary">
          Update the task
        </h2>

        <div>
          <label className="label">
            <span className="label-text font-medium">Task Title</span>
          </label>
          <input
            name="title"
            type="text"
            className="input input-bordered w-full"
            defaultValue={user.title}
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text font-medium">Category</span>
          </label>
          <select
            name="category"
            className="select select-bordered w-full"
            defaultValue={user.category}
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
          <label className="label">
            <span className="label-text font-medium">Description</span>
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            rows="4"
            placeholder="Describe the task"
            defaultValue={user.description}
          ></textarea>
        </div>

        <div>
          <label className="label">
            <span className="label-text font-medium">Deadline</span>
          </label>
          <input
            name="deadline"
            type="date"
            className="input input-bordered w-full"
            defaultValue={user.deadline}
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text font-medium">Budget</span>
          </label>
          <input
            name="budget"
            type="number"
            min="0"
            placeholder="Enter budget amount"
            className="input input-bordered w-full"
            defaultValue={user.budget}
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text font-medium">Your Email</span>
          </label>
          <input
            name="email"
            type="email"
            value={user.email}
            className="input input-bordered w-full bg-gray-100"
            readOnly
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text font-medium">Your Name</span>
          </label>
          <input
            name="name"
            type="text"
            value={user.name}
            className="input input-bordered w-full bg-gray-100"
            readOnly
          />
        </div>

        <div className="text-center pt-4">
          <button type="submit" className="btn btn-primary w-full">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTask;
