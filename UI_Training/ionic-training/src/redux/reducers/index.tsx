import { combineReducers } from "redux";
import JsonReducer from "./JsonReducer";

export default combineReducers({
  posts: JsonReducer,
});
