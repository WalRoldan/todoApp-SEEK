import { useState, useEffect } from "react";
import useTaskStore from "../store/taskStore";
import axios from "../mocks/axiosMock";

import { fetchTasks } from "../services/taskService";
import { toast } from "react-toastify";

const useTasks = () => {
  const { tasks, addTask, updateTask, deleteTask } = useTaskStore();
  const [loading, setLoading] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "",
    status: "to-do",
  });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  useEffect(() => {
    const loadTasks = async () => {
      setLoading(true);
      try {
        const fetchedTasks = await fetchTasks();
        fetchedTasks.forEach((task) => addTask(task));
      } catch (error) {
        console.error(error);
        toast.error("Error fetching tasks");
      } finally {
        setLoading(false);
      }
    };
    loadTasks();
  }, [addTask]);

  const handleAddTask = async () => {
    if (!newTask.title || !newTask.description || !newTask.priority) {
      alert("All fields are required!");
      return;
    }
    try {
      const response = await axios.post("/api/tasks", newTask);
      addTask(response.data.task);
      setNewTask({ title: "", description: "", priority: "", status: "to-do" });
      setIsModalOpen(false);
      toast.success("Task added successfully");
    } catch (error) {
      console.error("Error adding task:", error);
      toast.error("Error adding task");
    }
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setIsEditModalOpen(true);
  };

  const handleUpdateTask = async () => {
    try {
      const response = await axios.put(
        `/api/tasks/${taskToEdit.id}`,
        taskToEdit
      );
      updateTask(taskToEdit.id, response.data.task);
      setIsEditModalOpen(false);
      toast.success("Task updated successfully");
    } catch (error) {
      console.error("Error updating task:", error);
      toast.error("Error updating task");
    }
  };

  const handleDelete = (taskId) => {
    setTaskToDelete(taskId);
    setIsModalDeleteOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (taskToDelete) {
      try {
        await axios.delete(`/api/tasks/${taskToDelete}`);
        deleteTask(taskToDelete);
        toast.success("Task deleted successfully");
      } catch (error) {
        console.error("Error deleting task:", error);
        toast.error("Error deleting task");
      }
    }
    setTaskToDelete(null);
    setIsModalDeleteOpen(false);
  };

  const handleCancelDelete = () => {
    setIsModalDeleteOpen(false);
    setTaskToDelete(null);
  };

  return {
    tasks,
    loading,
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
  };
};

export default useTasks;
