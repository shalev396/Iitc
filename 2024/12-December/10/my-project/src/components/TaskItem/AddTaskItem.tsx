import React, { useRef } from "react";
import { generateRandomId } from "../../util/util";
import { Task } from "../Dashboard/Dashboard";
import { api } from "../../api";
export default function TaskItem({ onAddTask }) {
  const inputRefTitle = useRef<HTMLInputElement>(null);
  const inputRefDescription = useRef<HTMLInputElement>(null);
  const inputRefDueDate = useRef<HTMLInputElement>(null);
  const inputRefPriority = useRef<HTMLInputElement>(null);
  const inputRefStatus = useRef<HTMLInputElement>(null);
  async function handleAdd() {
    if (
      !inputRefTitle.current?.value ||
      !inputRefDescription.current?.value ||
      !inputRefDueDate.current?.value ||
      !inputRefPriority.current?.value ||
      !inputRefStatus.current?.value
    ) {
      console.error("Invalid input");
      return;
    }

    const newTask: Task = {
      id: generateRandomId(10),
      title: inputRefTitle.current.value,
      description: inputRefDescription.current.value,
      dueDate: new Date(inputRefDueDate.current.value),
      priority: inputRefPriority.current.value as Task["priority"],
      status: inputRefStatus.current.value as Task["status"],
    };

    try {
      // const { data } = await api.post("tasks", newTask);
      onAddTask(newTask); // Use the response from the API
    } catch (error) {
      console.error("Failed to add task:", error);
    }

    inputRefTitle.current.value = "";
    inputRefDescription.current.value = "";
    inputRefDueDate.current.value = "";
    inputRefPriority.current.value = "";
    inputRefStatus.current.value = "";
  }

  return (
    <div>
      <input type="text" ref={inputRefTitle} value="test" />
      <input type="text" ref={inputRefDescription} value="test" />
      <input type="date" ref={inputRefDueDate} />
      <input type="text" ref={inputRefPriority} value="Low" />
      <input type="text" ref={inputRefStatus} value="Pending" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
