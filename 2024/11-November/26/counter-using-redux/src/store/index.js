import { createStore } from "redux";
import counterReducer from "./reducers/counterReducers.js";
//start the storage with some values
export const store = createStore(counterReducer);
