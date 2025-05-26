import React from "react";
import { useLoaderData, useParams } from "react-router";

const TaskDetails = () => {
  const task = useLoaderData();
  const id = useParams();
  console.log(id);

  console.log(task);

  return <div>
    
  </div>;
};

export default TaskDetails;
