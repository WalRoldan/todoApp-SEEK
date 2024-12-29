import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import React from "react";

const TaskCard = ({ task, handleEditTask, handleDelete }) => {
  const getPriorityClass = (priority) => {
    switch (priority) {
      case "high":
        return "shadow-red-500 border-red-500";
      case "medium":
        return "shadow-yellow-500 border-yellow-500";
      case "low":
        return "shadow-green-500 border-green-500";
      default:
        return "";
    }
  };
  return (
    <div
      className={`bg-white shadow-chip rounded-xl p-6 border-l-4 ${getPriorityClass(
        task.priority
      )} transition-transform transform hover:scale-105 hover:shadow-lg`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">{task.title}</h2>
        <div className="flex space-x-3">
          <PencilIcon
            className="h-6 w-6 text-indigo-500 hover:text-indigo-700 cursor-pointer transition-colors duration-200"
            onClick={() => handleEditTask(task)}
          />
          <TrashIcon
            className="h-6 w-6 text-red-500 hover:text-red-700 cursor-pointer transition-colors duration-200"
            onClick={() => handleDelete(task.id)}
          />
        </div>
      </div>
      <p className="text-gray-600 text-sm">{task.description}</p>
      <div className="mt-6 flex justify-between items-center">
        <span
          className={`px-4 py-1 text-sm font-medium rounded-full ${
            task.priority === "high"
              ? "bg-red-100 text-red-600"
              : task.priority === "medium"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
        </span>
        <span
          className={`px-4 py-1 text-sm font-medium rounded-full ${
            task.status === "to-do"
              ? "bg-red-50 text-red-600"
              : task.status === "doing"
              ? "bg-yellow-50 text-yellow-600"
              : "bg-green-50 text-green-600"
          }`}
        >
          {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
