import React, { useState } from "react";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
} from "../store/actions/TodosActions.js";
import { useDispatch, useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  //make todo variable
  const [newTodo, setNewTodo] = useState("");
  //use hook to get all of "storages" so filter function is needed
  const dispatch = useDispatch();
  //add to store and reset for next one
  const handleAddTodo = () => {
    dispatch(addTodo(newTodo));
    setNewTodo("");
  };

  return (
    <div>
      <h2>To-Do List</h2>
      {/* update variable in "real time" */}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      {/* function to add and reset */}
      <button onClick={handleAddTodo}>Add</button>
      {/* show todos */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ margin: "10px 0" }}>
            {/* use dispatch to start 'toggleTodo' function */}
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {/* get the txt from current todos {map()} */}
              {todo.text}
            </span>
            {/* use dispatch to start 'deleteTodo' function */}
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
