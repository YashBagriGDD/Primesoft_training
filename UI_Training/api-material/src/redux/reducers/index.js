import { combineReducers } from "redux";
import postReducers from "./PostReducers";
import userReducer from "./UserReducer";


export default combineReducers({
    posts: postReducers,
    user: userReducer
});