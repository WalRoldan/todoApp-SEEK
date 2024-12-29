import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

let tasks = [
  {
    id: 1,
    title: "Task 1",
    description: "Description of Task 1",
    status: "to-do",
    priority: "high",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description of Task 2",
    status: "doing",
    priority: "medium",
  },
  {
    id: 3,
    title: "Task 3",
    description: "Description of Task 3",
    status: "done",
    priority: "low",
  },
];

mock.onGet("/api/tasks").reply(200, { tasks });

mock.onPost("/api/tasks").reply((config) => {
  const { title, description, priority, status } = JSON.parse(config.data);

  if (!title) {
    return [400, { message: "El título de la tarea es obligatorio." }];
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    description: description || "",
    priority: priority || "low",
    status,
  };

  tasks.push(newTask);
  return [201, { task: newTask }];
});

mock.onPut(/\/api\/tasks\/\d+/).reply((config) => {
  try {
    const match = config.url.match(/\/api\/tasks\/(\d+)/);
    if (!match) {
      console.error("ID no encontrado en la URL");
      return [400, { message: "ID no válido en la URL" }];
    }
    const id = Number(match[1]);

    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      console.error(`Task con ID ${id} no encontrada`);
      return [404, { message: `Task with id ${id} not found.` }];
    }

    const updatedTask = JSON.parse(config.data);
    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };

    console.log("Task actualizada:", tasks[taskIndex]);

    return [200, { task: tasks[taskIndex] }];
  } catch (error) {
    console.error("Error procesando la actualización:", error);
    return [500, { message: "Error interno del servidor" }];
  }
});

mock.onDelete(/\/api\/tasks\/\d+/).reply((config) => {
  console.log("Request URL:", config.url);

  const match = config.url.match(/\/api\/tasks\/(\d+)/);
  if (!match) {
    return [400, { message: "ID no válido en la URL" }];
  }

  const id = match[1];

  if (!id || isNaN(id)) {
    return [400, { message: "ID no encontrado o no válido" }];
  }
  console.log("Extracted ID:", id);

  const taskIndex = tasks.findIndex((task) => task.id === Number(id));
  if (taskIndex === -1) {
    return [404, { message: `Task with id ${id} not found.` }];
  }

  tasks.splice(taskIndex, 1);
  return [204];
});

export default axios;
