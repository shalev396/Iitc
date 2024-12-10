import React, { useState } from "react";
import { useTask } from "../providers/task-provider";
import FormDialog from "../FormDialog/FormDialog";
export default function SingleTask({ singleTask }) {
  const [isDialog, setIsDialog] = useState<boolean>(false);
  console.log(singleTask);
  const { tasks: contextTasks, addTask, delTask, setTask } = useTask(); // Access tasks and functions from context
  function deleteTask(id: string) {
    delTask(id);
  }
  function openDialog(id) {
    setIsDialog(true);
    setIsDialog(false);
  }
  console.log(singleTask);

  return (
    <>
      <li key={singleTask.id}>
        <h3>{singleTask.title}</h3>
        <p>{singleTask.description}</p>
        <p>Due: {new Date(singleTask.dueDate).toLocaleDateString()}</p>
        <p>Priority: {singleTask.priority}</p>
        <p>Status: {singleTask.status}</p>

        <FormDialog singleTask={singleTask} />
        <button onClick={() => deleteTask(singleTask.id)}>delete</button>
      </li>
    </>
  );
}
