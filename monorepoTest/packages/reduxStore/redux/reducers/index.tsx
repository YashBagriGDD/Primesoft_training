import { combineReducers } from 'redux';
import JsonReducer from './JsonReducer';
import UserReducer from './UserReducer';

export default combineReducers({
  posts: JsonReducer,
  user: UserReducer,
});
