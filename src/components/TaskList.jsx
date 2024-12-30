import React from "react";
import DeleteModal from "./DeleteModal";
import TaskCard from "./TaskCard";
import useTasks from "../hooks/useTasks";
import ModalTask from "./ModalTask";

export default function TaskList() {
  const {
    tasks,
    handleAddTask,
    handleUpdateTask,
    handleDelete,
    handleConfirmDelete,
    handleCancelDelete,
    handleEditTask,
    isModalOpen,
    isModalDeleteOpen,
    isEditModalOpen,
    taskToEdit,
    setTaskToEdit,
    setIsEditModalOpen,
    setIsModalOpen,
    newTask,
    setNewTask,
  } = useTasks();

  const toDoTasks = tasks.filter((task) => task.status === "to-do");
  const doingTasks = tasks.filter((task) => task.status === "doing");
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <div className="min-h-screen bg-gradient-to-br rounded-lg from-gray-50 via-gray-100 to-gray-200 p-6">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-center text-blue-700">
          Task Management System
        </h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-5 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-200 whitespace-nowrap"
        >
          + New Task
        </button>
      </header>

      <div className="flex justify-between gap-6">
        <div className="w-full sm:w-1/3">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">To Do</h2>
          <div className="space-y-4">
            {toDoTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                handleEditTask={handleEditTask}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </div>

        <div className="w-full sm:w-1/3">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Doing</h2>
          <div className="space-y-4">
            {doingTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                handleEditTask={handleEditTask}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </div>

        <div className="w-full sm:w-1/3">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Done</h2>
          <div className="space-y-4">
            {doneTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                handleEditTask={handleEditTask}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      <DeleteModal
        isOpen={isModalDeleteOpen}
        message="Are you sure you want to delete this task?"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
      <ModalTask
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        taskData={newTask}
        setTaskData={setNewTask}
        handleSave={handleAddTask}
        title="Create New Task"
      />
      <ModalTask
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        taskData={taskToEdit}
        setTaskData={setTaskToEdit}
        handleSave={handleUpdateTask}
        title="Edit Task"
      />
    </div>
  );
}
