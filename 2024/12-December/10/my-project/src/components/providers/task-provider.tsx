import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../api.ts";
import { Task } from "../../types/task";

interface TaskContextType {
  tasks: Task[] | null;
  addTask: (task: Task) => Promise<void>;
  getTask: (id: string) => Promise<Task>;
  setTask: (task: Task) => Promise<void>;
  delTask: (id: string) => Promise<void>;
  getAllTask: () => Promise<Task[] | null>;
}

export const TaskContext = createContext<TaskContextType | null>(null);

interface TaskProviderProps {
  children: React.ReactNode;
}

export default function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[] | null>(null);

  useEffect(() => {
    async function getTasks() {
      try {
        const { data } = await api.get<Task[]>("tasks");
        setTasks(data);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    }

    getTasks();
  }, []);
  async function getAllTask() {
    if (!tasks) {
      try {
        const { data } = await api.get<Task[]>("tasks");
        setTasks(data);
        return data;
      } catch (error) {
        console.error("Failed to fetch all tasks:", error);
        return null;
      }
    }
    return tasks;
  }

  async function addTask(task: Task) {
    try {
      const { data } = await api.post<Task>("tasks", task);
      setTasks((prev) => (prev ? [...prev, data] : [data]));
    } catch (error) {
      console.error("Failed to add task:", error);
    }
  }

  async function getTask(id: string) {
    try {
      const { data } = await api.get<Task>(`tasks/${id}`);
      return data;
    } catch (error) {
      console.error("Failed to fetch task:", error);
      throw error;
    }
  }

  async function setTask(task: Task) {
    try {
      const { data } = await api.patch<Task>(`tasks/${task.id}`, task);
      setTasks((prev) =>
        prev ? prev.map((t) => (t.id === task.id ? data : t)) : null
      );
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  }

  async function delTask(id: string) {
    try {
      await api.delete(`tasks/${id}`);
      setTasks((prev) => (prev ? prev.filter((t) => t.id !== id) : null));
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        getTask,
        setTask,
        delTask,
        getAllTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

// Custom hook for task
export function useTask() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useAuth must be used inside TaskProvider");
  }

  return context;
}
