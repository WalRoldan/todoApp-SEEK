import DeleteModal from "./DeleteModal";
import TaskCard from "./TaskCard";
import useTasks from "../hooks/useTasks";
import ModalTask from "./ModalTask";
import React from "react";

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

      {/* Task List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            handleEditTask={handleEditTask}
            handleDelete={handleDelete}
          />
        ))}
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
