import { createStore } from "redux";
import todosReducer from "./reducers/TodoReducer";
//start the storage with some values
export const store = createStore(todosReducer);
