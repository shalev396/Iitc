// import { } from
//default values
const initialState = {
  todos: [
    { id: 123456, text: "first todo", completed: false },
    { id: 547383, text: "second todo", completed: false },
  ],
};
//function to CRUD
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload, completed: false },
        ],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        ),
      };
    default:
      return state;
  }
};

export default todosReducer;
