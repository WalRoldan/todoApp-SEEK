import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [],

  // Agregar una tarea
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),

  // Actualizar una tarea
  updateTask: (id, updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) => (task.id === id ? updatedTask : task)),
    })),

  // Eliminar una tarea
  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),

  // Limpiar todas las tareas
  clearTasks: () => set({ tasks: [] }),
}));

export default useTaskStore;
