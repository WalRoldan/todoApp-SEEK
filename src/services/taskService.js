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
  } catch (error) {
    console.error(error);
    throw new Error("Error adding task");
  }
  }
};

export const updateTask = async (taskId, task) => {
  try {
  } catch (error) {
    console.error(error);
    throw new Error("Error updating task");
  }
    throw new Error("Error updating task");
  }
};

  } catch (error) {
    console.error(error);
    throw new Error("Error deleting task");
  }
  } catch (error) {
    throw new Error("Error deleting task");
  }
};
