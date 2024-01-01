import { combineReducers } from "redux";
import todosReducer from "./todos/todoSlice";

const rootReducer = combineReducers({
todos: todosReducer
})

export default rootReducer