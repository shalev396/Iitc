//function for dispatcher to know witch function to do (aka function filter for dispatcher to use correct functions)

export const addTodo = (text) => ({
  type: "ADD_TODO",
  payload: text,
});

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: id,
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  payload: id,
});
