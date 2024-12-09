import { cloneElement, useEffect, useRef, useState } from "react";
import { TodoItem } from "./todo-item";
//https://docs.google.com/document/d/169A3W_XVBQ_kZ2afYUILxbFh9l-0SSpPaLa_Dcg6YG0/edit?tab=t.0
const initTodos = [
  {
    id: "0",
    text: "todo1",
    isCompleted: false,
  },
  {
    id: "1",
    text: "todo2",
    isCompleted: true,
  },
];

export interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTodos(initTodos);
  }, []);

  async function handleDelete(id: string) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }
  async function handleComplete(id: string) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  function getHighestId(todos: Todo[]) {
    let max = 0;
    for (let i = 0; i < todos.length; i++) {
      if (Number.parseInt(todos[i].id) > max) {
        max = Number.parseInt(todos[i].id);
      }
    }
    return max;
  }
  function isFound(text: string) {
    for (let i = 0; i < todos.length; i++) {
      if (text === todos[i].text) {
        return true;
      }
    }
    return false;
  }

  function handleAdd() {
    if (
      !inputRef.current ||
      inputRef.current.value === "" ||
      isFound(inputRef.current.value)
    )
      return;
    const newTodoText = inputRef.current.value;

    setTodos((prev) => [
      ...prev,
      {
        id: (getHighestId(todos) + 1).toString(),
        text: newTodoText,
        isCompleted: false,
      },
    ]);
  }

  return (
    <div>
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              thisTodo={todo}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
            />
          );
        })}
      </ul>
    </div>
  );
}
