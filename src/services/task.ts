import { create } from "zustand";
import { Task } from "../types/task";

interface TaskState {
  tasks: Task[];
  add: (content: string) => void;
  remove: (id: string) => void;
  setDone: (id: string, done: boolean) => void;
}

export const useTaskStore = create<TaskState>()((set) => ({
  tasks: [],
  add: (content) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: Date.now().toString(), content, done: false },
      ],
    })),
  remove: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  setDone: (id, done) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, done } : task
      ),
    })),
}));
