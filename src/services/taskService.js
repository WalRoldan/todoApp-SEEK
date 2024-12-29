import axios from "../mocks/axiosMock";

export const fetchTasks = async () => {
  try {
    const response = await axios.get("/api/tasks");
    return response.data.tasks;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching tasks");
  }
};

export const createTask = async (task) => {
  try {
    const response = await axios.post("/api/tasks", task);
    return response.data.task;
  } catch (error) {
    console.error(error);
    throw new Error("Error adding task");
  }
};

export const updateTask = async (taskId, task) => {
  try {
    const response = await axios.put(`/api/tasks/${taskId}`, task);
    return response.data.task;
  } catch (error) {
    console.error(error);
    throw new Error("Error updating task");
  }
};

export const deleteTask = async (taskId) => {
  try {
    await axios.delete(`/api/tasks/${taskId}`);
  } catch (error) {
    console.error(error);
    throw new Error("Error deleting task");
  }
};
