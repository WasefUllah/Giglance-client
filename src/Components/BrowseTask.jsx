import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import TaskCard from "./TaskCard";

const BrowseTask = () => {
  const loadedTasks = useLoaderData();
  const [tasks, setTasks] = useState(loadedTasks);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    if (!selectedCategory) {
      // If no category is selected, show all from loader
      setTasks(loadedTasks);
    } else {
      // Fetch filtered tasks from the server
      fetch(`https://giglance-server.vercel.app/tasks?category=${selectedCategory}`)
        .then((res) => res.json())
        .then((data) => setTasks(data));
    }
  }, [selectedCategory, loadedTasks]);

  return (
    <div>
      <h1 className="font-semibold text-3xl text-center my-4">All Tasks</h1>

      {/* Filter Dropdown */}
      <div className="text-center my-4">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="select select-bordered w-full max-w-xs"
          defaultValue=""
        >
          <option disabled value="">
            Filter by Category
          </option>
          <option value="">All</option>
          <option value="Web Development">Web Development</option>
          <option value="Design">Design</option>
          <option value="Writing">Writing</option>
          <option value="Marketing">Marketing</option>
        </select>
      </div>

      {/* Tasks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 my-4">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default BrowseTask;
