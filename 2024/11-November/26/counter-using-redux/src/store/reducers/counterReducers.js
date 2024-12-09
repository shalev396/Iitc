// import { } from
//default values
const initialState = 0;
//function to CRUD
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COUNT":
      return state + action.payload;
    case "MINUS_COUNT":
      return state - action.payload;
    default:
      return state;
  }
};

export default countReducer;
