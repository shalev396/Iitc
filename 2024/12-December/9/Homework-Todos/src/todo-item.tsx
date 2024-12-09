import { Todo } from "./App";

interface TodoItemProps {
  thisTodo: Todo;
  handleDelete: (id: string) => Promise<void>;
  handleComplete: (id: string) => Promise<void>;
}

export function TodoItem({
  thisTodo,
  handleDelete,
  handleComplete,
}: TodoItemProps) {
  return (
    <li key={thisTodo.id}>
      <span>{thisTodo.text}</span>
      <button onClick={() => handleDelete(thisTodo.id)}>Delete</button>
      <button onClick={() => handleComplete(thisTodo.id)}>
        {thisTodo.isCompleted ? "completed" : "not completed"}
      </button>
    </li>
  );
}
