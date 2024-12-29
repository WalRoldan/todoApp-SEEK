// import DeleteModal from "./DeleteModal";
// import TaskCard from "./TaskCard";
// import useTasks from "../hooks/useTasks";
// import ModalTask from "./ModalTask";
// import React from "react";

// export default function TaskList() {
//   const {
//     tasks,
//     handleAddTask,
//     handleUpdateTask,
//     handleDelete,
//     handleConfirmDelete,
//     handleCancelDelete,
//     handleEditTask,
//     isModalOpen,
//     isModalDeleteOpen,
//     isEditModalOpen,

//     taskToEdit,
//     setTaskToEdit,
//     setIsEditModalOpen,
//     setIsModalOpen,
//     newTask,
//     setNewTask,
//   } = useTasks();

//   return (
//     <div className="min-h-screen bg-gradient-to-br rounded-lg from-gray-50 via-gray-100 to-gray-200 p-6">
//       <header className="flex flex-col sm:flex-row justify-between items-center mb-8">
//         <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-center text-blue-700">
//           Task Management System
//         </h1>
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-5 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-200 whitespace-nowrap"
//         >
//           + New Task
//         </button>
//       </header>

//       {/* Task List */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {tasks.map((task) => (
//           <TaskCard
//             key={task.id}
//             task={task}
//             handleEditTask={handleEditTask}
//             handleDelete={handleDelete}
//           />
//         ))}
//       </div>

//       {/* Modals */}
//       <DeleteModal
//         isOpen={isModalDeleteOpen}
//         message="Are you sure you want to delete this task?"
//         onConfirm={handleConfirmDelete}
//         onCancel={handleCancelDelete}
//       />
//       <ModalTask
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         taskData={newTask}
//         setTaskData={setNewTask}
//         handleSave={handleAddTask}
//         title="Create New Task"
//       />
//       <ModalTask
//         isOpen={isEditModalOpen}
//         onClose={() => setIsEditModalOpen(false)}
//         taskData={taskToEdit}
//         setTaskData={setTaskToEdit}
//         handleSave={handleUpdateTask}
//         title="Edit Task"
//       />
//     </div>
//   );
// }
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

  // Filtrar tareas por estado
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

      {/* Task List with Three Columns */}
      <div className="flex justify-between gap-6">
        {/* To Do Column */}
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

        {/* Doing Column */}
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

        {/* Done Column */}
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
