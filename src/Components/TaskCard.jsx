import React from 'react';
import { Link } from 'react-router';

const TaskCard = ({ task }) => {
    const {_id, title, deadline, budget, name, email, description} = task;
    
    
     
    
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4 border hover:shadow-xl dark:bg-gray-600 dark:text-white">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-accent mb-2">{title}</h3>
      
      <p className="text-sm text-gray-600 dark:text-white mb-1"><span className="font-medium">Deadline:</span> {deadline}</p>
      <p className="text-sm text-gray-600 dark:text-white mb-1"><span className="font-medium">Budget:</span> ${budget}</p>
      <p className="text-sm text-gray-600 dark:text-white mb-1"><span className="font-medium">Posted by:</span> {name} ({email})</p>
      
      <p className="text-gray-700 dark:text-white mt-2 mb-4 line-clamp-3">{description}</p>
      
      <div className="text-right">
        <Link
          to={`/tasks/${_id}`}
          className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default TaskCard;
